import React from 'react'
import Head from 'next/head'
import Script from 'next/script';



const Privacy = () => {


  const rankMathSchema = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
        name: 'Dr Trailer',
        url: 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
        image: {
          '@type': 'ImageObject',
          '@id': 'https://gravatar.com/drtrailer2022',
          url: 'https://gravatar.com/drtrailer2022',
          caption: 'Dr Trailer',
          inLanguage: 'en-US'
        }
      },
      {
        '@type': 'Organization',
        '@id': 'https://onetwothreemoviesfree.onrender.com/#organization',
        name: '123 Movies Free - Explore. Discover. Connect..',
        url: 'https://onetwothreemoviesfree.onrender.com'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://onetwothreemoviesfree.onrender.com/#website',
        url: 'https://onetwothreemoviesfree.onrender.com',
        name: '123 Movies Free - Explore. Discover. Connect..',
        publisher: {
          '@type': 'Organization',
          '@id': 'https://onetwothreemoviesfree.onrender.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://onetwothreemoviesfree.onrender.com/?s={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      },
      {
        '@type': 'WebPage',
        '@id': 'https://onetwothreemoviesfree.onrender.com/#webpage',
        url: 'https://onetwothreemoviesfree.onrender.com/',
        name: 'Movie',
        datePublished: '2024-01-13T13:00:00+00:00',
        dateModified: '2024-01-13T13:13:00+00:00',
        about: {
          '@type': 'Person',
          '@id': 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
          name: 'Dr Trailer',
          url: 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
          image: {
            '@type': 'ImageObject',
            '@id': 'https://gravatar.com/drtrailer2022',
            url: 'https://gravatar.com/drtrailer2022',
            caption: 'Dr Trailer',
            inLanguage: 'en-US'
          }
        },
        isPartOf: {
          '@id': 'https://onetwothreemoviesfree.onrender.com/#website'
        },
        inLanguage: 'en-US',
        mainEntity: [
          {
            '@type': 'Article',
            '@id': 'https://onetwothreemoviesfree.onrender.com/',
            url: 'https://onetwothreemoviesfree.onrender.com/',
            headline: 'Movie',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://onetwothreemoviesfree.onrender.com/#organization',
              name: '123 Movies Free - Explore. Discover. Connect..',
              url: 'https://onetwothreemoviesfree.onrender.com'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://onetwothreemoviesfree.onrender.com/',
            url: 'https://onetwothreemoviesfree.onrender.com/',
            headline: 'Tvshow',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://onetwothreemoviesfree.onrender.com/#organization',
              name: '123 Movies Free - Explore. Discover. Connect..',
              url: 'https://onetwothreemoviesfree.onrender.com'
            }
          },
          {
            '@type': 'Article',
            '@id': 'https://onetwothreemoviesfree.onrender.com/',
            url: 'https://onetwothreemoviesfree.onrender.com/',
            headline: 'Adult',
            datePublished: '2024-01-13T13:00:00+00:00',
            dateModified: '2024-01-13T13:13:00+00:00',
            author: {
              '@type': 'Person',
              '@id': 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              name: 'Dr Trailer',
              url: 'https://onetwothreemoviesfree.onrender.com/author/ytmag/',
              image: {
                '@type': 'ImageObject',
                '@id': 'https://gravatar.com/drtrailer2022',
                url: 'https://gravatar.com/drtrailer2022',
                caption: 'Dr Trailer',
                inLanguage: 'en-US'
              }
            },
            publisher: {
              '@type': 'Organization',
              '@id': 'https://onetwothreemoviesfree.onrender.com/#organization',
              name: '123 Movies Free - Explore. Discover. Connect..',
              url: 'https://onetwothreemoviesfree.onrender.com'
            }
          }
        ]
      }
    ]
  })
  


  return (
    <div>
       <Head>
        <title>123 Movies Free | Privacy Policy</title>
      
        <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://onetwothreemoviesfree.onrender.com/sitemap.xml'
          />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0'
          />
          <link
            rel='icon'
            type='image/x-icon'
            href='wp-content/uploads/2023/05/favicon.ico'
          />
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicon-16x16.png'
          />
          <link rel='manifest' href='/site.webmanifest' />
          <meta name='googlebot' content='index,follow' />
          <meta name='revisit-after' content='1 days' />
          <meta
            name='robots'
            content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          />
          <meta
            name='keywords'
            content='movie review sites,movie magazine,movie magazines uk,movie magazines us,movie magazines in,the film magazine,thefilmmagazine,movie news websites,film reviews,film reviews uk,film reviews us,film reviews in,film magazine online'
          />
          <meta
            name='description'
            content='Explore the world of cinema with 123 Movies Free: Captivating reviews, top picks, and the latest news.'
          />
          <link rel='canonical' href='https://onetwothreemoviesfree.onrender.com/intro/privacy' />
          <meta property='og:locale' content='en_US' />
          <meta property='og:type' content='website' />
          <meta
            property='og:title'
            content='123 Movies Free '
          />
          <meta
            property='og:description'
            content='123 Movies Free is the top platform for exploring and ing software,the premier platform for the latest releases and secure s.'
          />
          <meta property='og:url' content='https://onetwothreemoviesfree.onrender.com/intro/privacy/' />
          <meta
            property='og:site_name'
            content='123 Movies Free '
          />
          <meta
            property='og:image'
            content='https://onetwothreemoviesfree.onrender.com/og_image.webp'
          />
          <meta property='og:image:width' content='1280' />
          <meta property='og:image:height' content='720' />
          <meta property='og:image:type' content='image/jpg' />
          <meta
            name='application-name'
            content='123 Movies Free '
          />
          <meta
            property='article:modified_time'
            content='2024-01-01T13:13:13+00:00'
          />
          <link
            rel='sitemap'
            type='application/xml'
            title='Sitemap'
            href='https://onetwothreemoviesfree.onrender.com/sitemap.xml'
          />
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='google-site-verification'
            content='Ykqd8f8Aju4y3eu9wpMK_A9a1D0jfWEXustp2_QbYRM'
          />
          <meta
            name='facebook-domain-verification'
            content='zifsy861dlzorbop8eww76tsqlf7t4'
          />
          <meta
            name='dailymotion-domain-verification'
            content='dm0zffs8dj8pcb3gd'
          />
          <meta name='monetag' content='35a75bbdeae678c82776e64fb78cdac5' />
          <script
            type='application/ld+json'
            dangerouslySetInnerHTML={{ __html: rankMathSchema }}
          />
          <script
          dangerouslySetInnerHTML={{
            __html: `
            (function (w, d, s, id) {
              if (typeof (w.webpushr) !== 'undefined') return;
              w.webpushr = w.webpushr || function () { (w.webpushr.q = w.webpushr.q || []).push(arguments) };
              var js, fjs = d.getElementsByTagName(s)[0];
              js = d.createElement(s); js.id = id; js.async = 1;
              js.src = "https://cdn.webpushr.com/app.min.js";
              fjs.parentNode.appendChild(js);
            }(window, document, 'script', 'webpushr-jssdk'));

            webpushr('setup', { 'key': 'BBQBh9BNi-dtzrb7ayxfk3Kuh11sEA0hiPlNpdyHX0pueAdWd4lxPInWWXC3bcc5EsZTx8jDnZeDiJCRKkA91Lo' });
          `
          }}
        />
            <script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5527677677744511'
            crossorigin='anonymous'
          ></script>
        </Head>
        {/* <Script src="../../propler/ads.js" defer /> */}
         {/* <Script src="../../propler/ads2.js" defer /> */}
   
   
         <div className="container my-24 px-6 mx-auto">

<section className="mb-32 text-gray-800">
  <div className="flex flex-wrap">
    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full  px-3 lg:px-6">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="font-bold mb-2">123 Movies Free </p>
      <p className="text-gray-500 mb-6">
      123 Movies Free International(123 Movies Free) is committed to protecting your privacy. This Privacy Policy applies only to the Web Sites and applications published by 123 Movies Free International.
      </p>
      <p className="font-bold mb-2">Note: Use of Information</p>
      <p className="text-gray-500 mb-6">
      Information that we collect  </p>
      <p className="text-gray-500 mb-6">
      123 Movies Free may collect information from its users in three different ways: directly from the user, from traffic references of hostingservers and from cookies.
      </p>
      <p className="font-bold mb-2">We use the information we collect to:</p>
      <p className="text-gray-500 mb-6">
     1. Provide the services you request. </p>
      <p className="text-gray-500 mb-6">
     2. As otherwise described to you at the point of collection or with your consent.  
      </p>
      <p className="font-bold mb-2">
      Changes to This Privacy Policy
      </p>
      <p className="text-gray-500 mb-6">
      We may update this Privacy Policy to reflect changes in our practices and service offerings. If we modify our Privacy Policy, we will update the "Effective Date" and such changes will be effective upon posting.
      </p>

     
      <p className="text-gray-500">
      We do not make warranties that this site will operate error free. If you see an error, please contact the <a className="font-bold text-blue-500 mb-6" href="mailto:ytmagpublisher@outlook.com ">webmaster</a>. By entering this site you agree to hold the owners, employees, advertisers of 123 Movies Free  free from any and all liability.This site (123 Movies Free ) do not offer any membership.If you have any questions please feel free to <a className="font-bold text-blue-500 mb-6" href="mailto:ytmagpublisher@outlook.com">contact us</a>.
      </p>
    </div>

  </div>
</section>

      </div>
    </div>
  )
}

export default Privacy