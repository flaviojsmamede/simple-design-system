import React from 'react';
import PrimaryLink from './PrimaryLink';

interface FooterProps {
  credits: string;
  footer_links: { link: string; label: string }[];
}

const Footer: React.FC<FooterProps> = ({ credits, footer_links }) => {
  return (
    <div className='footer'>
      <p>{ credits }</p>
      <ul className="nav-links">
        {footer_links.map((item, index) => (
          <li key={index}>
            <PrimaryLink to={item.link} label={item.label} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
