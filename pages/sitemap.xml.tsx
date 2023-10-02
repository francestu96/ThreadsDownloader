const URL = "https://threadsbro.link";

function generateSiteMap(locales: string[]) {
    // return `<?xml version="1.0" encoding="UTF-8"?></xml>`;
    return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--We manually set the two URLs we know already-->
       <url>
         <loc>${URL}</loc>
       </url>
       <url>
         <loc>${URL}/faq</loc>
       </url>
       <url>
         <loc>${URL}/privacy-policy</loc>
       </url>
       <url>
         <loc>${URL}/terms-of-service</loc>
       </url>
       ${locales.map(x => {
           return `
            <url>
                <loc>${`${URL}/${x}`}</loc>
            </url>
            <url>
                <loc>${`${URL}/${x}/faq`}</loc>
            </url>
            <url>
                <loc>${`${URL}/${x}/privacy-policy`}</loc>
            </url>
            <url>
                <loc>${`${URL}/${x}/terms-of-service`}</loc>
            </url>`;
         }).join('')}
     </urlset>
   `;
  }
  
  function SiteMap() { }
  
  export async function getServerSideProps({ res, locales }: any) {
    const sitemap = generateSiteMap(locales);
  
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default SiteMap;