import React from 'react';
import PrimaryButton from './PrimaryButton';
import Image from 'next/image';

interface BannerProps {
  header: string;
  paragraph: string;
  button_to: string;
  button_label: string;
  button_display: 'block' | 'none';
  image_src?: string;
  image_display?: 'block' | 'none';
  background_image?: string;
}

const Banner: React.FC<BannerProps> = ({
  header,
  paragraph,
  button_to,
  button_label,
  button_display,
  image_src='',
  image_display='',
  background_image = undefined,
}) => {
  const background_style: React.CSSProperties = {
    background: background_image
      ? `url(${background_image}) no-repeat center center fixed`
      : '#1D2125',
    backgroundSize: 'cover'
  };

  return (
    <div className={`banner ${image_display ? 'text-center' : ''}`} style={{ ...background_style }}>
      <div className="banner-divs">
        <div className="banner-text">
          <h1>{header}</h1>
          <p>{paragraph}</p>
          <PrimaryButton
            to={button_to}
            label={button_label}
            display_style={button_display}
          />
        </div>
        <Image
          src={image_src}
          alt="Terra Logo"
          className="logo"
          width={575}
          height={275}
          style={{ display: image_display ? image_display : '' }}
        />
      </div>
    </div>
  );
};

export default Banner;
