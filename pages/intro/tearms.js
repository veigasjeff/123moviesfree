import React from 'react'
import Head from 'next/head'
import Script from 'next/script';


const Tearms = () => {

  const containerStyle = {
    margin: '24px auto',
    padding: '0 24px',
    maxWidth: '960px',
  };

  const sectionStyle = {
    marginBottom: '32px',
    color: '#333',
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
  };

  const listItemStyle = {
    marginLeft: '20px',
  };

  const linkStyle = {
    fontWeight: 'bold',
    color: '#007bff',
    textDecoration: 'none',
  };

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
        <title>123 Movies Free | Terms of Use</title>
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
          <link rel='canonical' href='https://onetwothreemoviesfree.onrender.com/intro/tearms' />
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
          <meta property='og:url' content='https://onetwothreemoviesfree.onrender.com/intro/tearms/' />
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
     
<div style={containerStyle}>

<section style={sectionStyle}>
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flexGrow: 1, flexShrink: 0, flexBasis: 'auto', marginBottom: '12px', width: '100%', padding: '0 12px' }}>
      <h1 style={headingStyle}>Terms and Conditions</h1>
    
      <h2 style={headingStyle}>1. Changes</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We may occasionally change these Terms, so we encourage you to review the Terms periodically. If you continue to use the Services after we change the Terms, you accept all changes.
      </p>
      </ul>
      <h2 style={headingStyle}>2. Registration and Access Controls</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      You are responsible for maintaining the confidentiality of your login names and passwords and you accept responsibility for all activities, charges, and damages that occur under your account. If you have reason to believe that someone is using your account without your permission, you should contact us immediately. We will not be responsible for any loss or damage resulting from your failure to notify us of unauthorized use.
      </p>
      </ul>
      <h2 style={headingStyle}>3. Third - party ads</h2>
      <ul style={{ ...listItemStyle, color: '#666', marginBottom: '24px' }}>
      <p style={{ color: '#666', marginBottom: '24px' }}>
      We use third-party advertising companies to serve ads when you visit our Website. These companies may use information (not including your name, address email address or telephone number) about your visits to this and other Web sites in order to provide advertisements about goods and services of interest to you.
      </p>
      </ul>
      <h2 style={headingStyle}>Contact for Advertisement</h2>
    

      {/* Add more sections with similar structure */}

      <p style={{ color: '#666' }}>
      Please review these terms and conditions carefully before using our website. If you have any questions or concerns, please contact us at <a style={linkStyle} href="mailto:ytmagpublisher@outlook.com">ytmagpublisher@outlook.com</a>.
      </p>
    </div>
  </div>
</section>


      </div>
    </div>
  )
}

export default Tearms