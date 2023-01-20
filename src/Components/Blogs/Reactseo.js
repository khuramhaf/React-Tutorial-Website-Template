import {useEffect} from 'react'

function Reactseo() {

    useEffect(()=>{
        document.title="React SEO - A General Overview"
        document.getElementsByTagName("META")[3].content="On this page, you will understand the problems faced by modern search engines while indexing Javascript-rich pages and their solutions";
        document.documentElement.scrollTop = 0;
    }, [])
    return ( 

        <div>

            <h1>React SEO - A General Overview</h1>
          <p>
          React is a javascript library for making user interfaces. If you are developing a React app and it is not a single page then you might be missing a lot of value. Single page apps SPAs are the common type of apps we develop on React. SPAs are good at providing a better user interface to users and also saving user internet data. SEO of a SPA is one of the hottest topics in town. In this blog, we will discuss the problems which search engines face while indexing the SPAs and also see some solutions.
            </p>

            <p>
            Let us first understand what SEO is. SEO is not a marketing technique in fact SEO means performing well in search engine search results and the only way to perform well in search results is to provide good value to your user a better user interface is one of the important aspects of performing well in SERP. SPA is the better way to create user-friendly interfaces for the web. So if we consider website design as the only criteria for ranking (although it is not the only one) theoretically speaking that SPA should rank well in the search engines. If all other requirements are also fulfilled as well e.g well organized content.            </p>
       
       <p>

       Now let us see the technical aspect of SEO. We will take the example of Google and React to understand the fundamentals of indexing. If you have created a React app with a Node.js backend you have noticed that whenever the user refreshes the page the browser request the file from the server and for any path the server sends the index.html file. I am specifically talking about SPA. The case is similar for Googlebot. Under the hood, both Googlebot and web browser are doing the same thing, requesting the files from the server. When we submit our URLs in the sitemap to the Google search console Googlebot requests each file from the server and the server sends an index.html file for each URL. The same HTML file for every URL. The bot takes the HTML file and starts crawling it but here is the issue. Most of the react code is in a javascript file not in an HTML file but at this moment Googlebot does not care about the additional Javascript which is linked in the HTML file and postponed the javascript crawling for the future because javascript crawling is expensive Googlebot needs to render this file to get all the HTML from it. Well, in my personal understanding google does not index any page without rendering the full javascript code even if it is a plain HTML file with a javascript code, google wants to know all the HTML before indexing the page.
       </p>

       <p>
       As we said above react app is a rich Javascript file and Javascript rendering is expensive so google takes some time to index a react app. Although it is not the case that Google will leave the page without indexing it because if any page that gives good value in terms of the user interface to the user should be in the search results and trust me it will be. So generally speaking Javascript is not the hurdle in any case for indexing. Although Google needs more resources to index a Javascript file and it requires more time.

       </p>

       <p>
       Now that we have seen the problem Google needs more time to index the Javascript-rich page. So what is the solution, The solution is pretty simple and straight forward and that is to increase the quality of your pages because if the quality of a page will be good it will urge Google to index it quickly. Insert proper TITLE, Heading, and description tags on pages. Increase the quality of your content, Make your user interface better for desktop and mobile, Improve your website structure, and Make your pages for users, not for Google. Page quality is the only solution to increase traffic on your website and there is no other way. 
       </p>

       <p>
       If you find any error in this writing you can send me an email @ <span style={{color:'blue'}}>khuram@musk-technology.com</span>
       </p>
        
        </div>
     );
}

export default Reactseo;