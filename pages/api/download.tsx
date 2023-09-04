import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { ThreadsAPI } from 'threads-api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "GET") {
        return res.status(500).json({ error: "This API call only accepts GET methods" });
    }

    const url = req.query.url;
    if(!url){
        return res.status(500).json({ error: "Missing URL param" });
    }

    const threadsAPI = new ThreadsAPI({ deviceID: "android-3nspciej4u400000"});
    const postId = threadsAPI.getPostIDfromURL(url.toString());
    if(!postId){
        return res.status(500).json({ error: "Invalid URL" });
    }
    const postData = await threadsAPI.getThreads(postId);
    if(!postData){
        return res.status(500).json({ error: "Content unavailable" });
    }

    var media = postData.containing_thread.thread_items[0].post;
    media = media.text_post_app_info.share_info.quoted_post ? media.text_post_app_info.share_info.quoted_post : media;
    media = media.text_post_app_info.share_info.reposted_post ? media.text_post_app_info.share_info.reposted_post : media;

    console.log(postData.containing_thread.thread_items[0].post.video_versions[0].url);
    console.log(postData.containing_thread.thread_items[0].post.caption?.text.replace(/[^\x00-\x7F]/g, "").split('\n')[0].trim());
    const fileName = postData.containing_thread.thread_items[0].post.caption?.text.replace(/[^\x00-\x7F]/g, "").split('\n')[0].trim();

    const { data } = await axios.get(postData.containing_thread.thread_items[0].post.video_versions[0].url, { responseType: "stream" });
    res.setHeader("content-disposition", `attachment; filename=${fileName}.mp4`);
    
    data.pipe(res);
}