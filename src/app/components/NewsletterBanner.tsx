import React from 'react';
import MainForm from './MainForm';

interface NewsletterBannerProps {
  header: string;
  paragraph: string;
  background_image?: string;
}

const NewsletterBanner: React.FC<NewsletterBannerProps> = ({
  header,
  paragraph,
  background_image = undefined
}) => {
  const background_style: React.CSSProperties = {
    background: background_image
      ? `url(${background_image}) no-repeat center center fixed`
      : '#1D2125',
    backgroundSize: 'cover',
  };

  return (
    <div id="newsletter" className="banner text-center" style={background_style}>
      <div className="banner-divs">
        <div className="banner-text">
          <h1>{header}</h1>
          <p>{paragraph}</p>
          <MainForm
            input_name1="name"
            input_type1="text"
            input_placeholder1="Full name"
            input_name2="email"
            input_type2="email"
            input_placeholder2="Email Address"
            button_label="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsletterBanner;
