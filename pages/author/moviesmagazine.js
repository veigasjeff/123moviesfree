import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ytmag ({ movie }) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        let searchTermLower = searchTerm.toLowerCase();
        let searchURL;
        if (searchTermLower.includes('tv show')) {
            searchURL = `https://www.google.com/search?q=site:https://onetwothreemoviesfree.onrender.comtvshow/${encodeURIComponent(searchTermLower)}-2024`;
        } else {
            searchURL = `https://www.google.com/search?q=site:https://onetwothreemoviesfree.onrender.commovie/${encodeURIComponent(searchTermLower)}-2024`;
        }
        router.push(searchURL);
    };
    return (
        <div className={`w-full bg-gray-600 shadow`}>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Youtube Magazine - Explore. Discover. Connect..</title>
                {/* Add your other meta tags here */}
                <script
                    type="application/ld+json"
                    className="rank-math-schema"
                    dangerouslySetInnerHTML={{
                        __html: `{
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Person",
                                    "@id": "https://gravatar.com/drtrailer2022/#person",
                                    "name": "Dr Trailer"
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://onetwothreemoviesfree.onrender.com#website",
                                    "url": "https://onetwothreemoviesfree.onrender.com",
                                    "name": "Youtube Magazine™",
                                    "publisher": {
                                        "@id": "https://gravatar.com/drtrailer2022/#person"
                                    },
                                    "inLanguage": "en-US"
                                },
                                {
                                    "@type": "ProfilePage",
                                    "@id": "https://onetwothreemoviesfree.onrender.comauthor/ytmag/#webpage",
                                    "url": "https://onetwothreemoviesfree.onrender.comauthor/ytmag/",
                                    "name": "Dr Trailer",
                                    "isPartOf": {
                                        "@id": "https://onetwothreemoviesfree.onrender.com#website"
                                    },
                                    "inLanguage": "en-US",
                                    "mainEntityOfPage": {
                                        "@id": "https://onetwothreemoviesfree.onrender.comauthor/Youtube Magazine/#webpage"
                                    }
                                },
                                {
                                    "@type": "Person",
                                    "@id": "https://onetwothreemoviesfree.onrender.comauthor/Youtube Magazine/",
                                    "name": "Dr Trailer",
                                    "url": "https://onetwothreemoviesfree.onrender.comauthor/Youtube Magazine/",
                                    "image": {
                                        "@type": "ImageObject",
                                        "@id": "https://gravatar.com/drtrailer2022",
                                        "url": "https://gravatar.com/drtrailer2022",
                                        "caption": "Dr Trailer",
                                        "inLanguage": "en-US"
                                    },
                                    "sameAs": [
                                        "https://onetwothreemoviesfree.onrender.com"
                                    ],
                                    "mainEntityOfPage": {
                                        "@id": "https://onetwothreemoviesfree.onrender.comauthor/Youtube Magazine/#webpage"
                                    }
                                }
                            ]
                        }`
                    }}
                ></script>
                    <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5527677677744511'
            crossorigin='anonymous'
          ></script>
            </Head>
 
            <div id="main">
            <h1 className="flex flex-col text-center py-5 font-bold text-3xl items-center justify-center" style={{ color: "#40D7BC", textShadow: "5px 5px 2px #000" }}>Youtube Magazine - Explore. Discover. Connect.. </h1>
                <div className="container" style={{justifyContent: 'center', alignItems: 'center', height: '10vh', marginTop: '100px', }}>
                    <div className="home-main">
                        <div className="hm-logo"><a title="" href="https://onetwothreemoviesfree.onrender.com" id="logo-home"></a></div>
                        <div className="addthis_inline_share_toolbox mb10"></div>
                        <div id="hm-search">
                            <div id="search-homepage" className="search-content">
                                <form onSubmit={handleSearch}>
                                    <input
                                        className="form-control search-input"
                                        type="text"
                                        placeholder="Search.."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                                <div id="search-homepage-results"></div>
                            </div>
                        </div>
                        <div className="hm-button"><a href="https://onetwothreemoviesfree.onrender.com" className="btn btn-lg btn-successful" style={{ color: '#40D7BC', fontSize: '24px', textShadow: '3px 5px 5px #000' }}>Youtube Magazine™</a></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
