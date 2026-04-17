  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App.jsx';
  import './index.css';
  import { Helmet } from 'react-helmet-async';
  import { LazyLoadImage } from 'react-lazy-load-image-component';

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

  function PortfolioPage() {
    return (
      <>
        <Helmet>
          {/* Title and Meta Tags for SEO */}
          <title>Santhosh Kumar | Python Developer Portfolio</title>
          <meta name="description" content="Portfolio of Santhosh Kumar, a Python developer skilled in modern backend web technologies." />
          <meta name="keywords" content="Python Developer, Santhosh Kumar, Santhosh Kumar Portfolio, Full Stack Developer" />

          {/* Open Graph Tags for Social Media */}
          <meta property="og:title" content="Santhosh Kumar | Python Developer Portfolio" />
          <meta property="og:description" content="Portfolio of Santhosh Kumar, showcasing Python and full-stack development skills." />
          <meta property="og:image" content="URL_of_Your_Portfolio_Image" />
          <meta property="og:url" content="https://santhosh-portfolio.netlify.app/" />

          {/* JSON-LD Structured Data for SEO */}
          <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Person",
              "name": "Santhosh Kumar",
              "jobTitle": "Python Developer",
              "url": "https://santhosh-portfolio.netlify.app/",
              "sameAs": [
                "https://www.linkedin.com/in/santhosh-kumar-s-1934022b7",
                "https://github.com/santhoshkumar7507"
              ]
            }
          `}
          </script>
        </Helmet>

        <LazyLoadImage src="your-image.jpg" alt="portfolio image" effect="blur" />

        
        <h1>Santhosh Kumar - Python Developer</h1>
        <h2>Portfolio</h2>
        <p>Hi, I'm Santhosh Kumar, a passionate Python developer dedicated to crafting robust and scalable software solutions...</p>
      </>
    );
  }

  export default PortfolioPage;
