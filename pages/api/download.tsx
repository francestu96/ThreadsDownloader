import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ThreadsAPI } from 'threads-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(500).end("This API call only accepts GET methods");
    }

    const url = req.query.url;
    if(!url){
        return res.status(500).end("Missing URL or EXT param");
    }

    const threadsAPI = new ThreadsAPI({ deviceID: "android-3nspciej4u400000"});
    const postId = threadsAPI.getPostIDfromURL(url.toString());
    if(!postId){
        return res.status(500).end("Invalid URL");
    }
    try{
        const postData = await threadsAPI.getThreads(postId);
        if(!postData){
            return res.status(500).end("Unavailable content!");
        }

        const postCode = url.toString().split('/').pop();
        var media = postData.containing_thread.thread_items.find(x => x.post.code == postCode)?.post;

        if(!media){
            return res.status(500).end("Cannot find the desired post");
        }

        const fileName = media.caption?.text.replace(/[^\x00-\x7F]/g, "").split('\n')[0].trim();
        if(media.video_versions.length > 0){
            const { data } = await axios.get(media.video_versions[0].url, { responseType: "stream" });
            res.setHeader("content-disposition", `attachment; filename=${fileName}.mp4`);
            data.pipe(res);
        }
        else{
            const { data } = await axios.get(media.image_versions2.candidates[0].url, { responseType: "stream" });
            res.setHeader("content-disposition", `attachment; filename=${fileName}.jpg`);
            data.pipe(res);
        }
        
    }
    catch{
        return res.status(500).end("Unavailable content!");
    }

}