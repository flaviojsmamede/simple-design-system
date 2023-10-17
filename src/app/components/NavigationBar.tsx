import React from 'react';
import PrimaryButton from './PrimaryButton';
import PrimaryLink from './PrimaryLink';
import Logo from './Logo';

interface NavigationBarProps {
  nav_links: { link: string; label: string }[];
  button_to: string;
  button_label: string;
  logo_to: string;
  logo_src: string;
  button_display?: 'block' | 'none';
}

const NavigationBar: React.FC<NavigationBarProps> = ({ logo_to, logo_src, nav_links, button_to, button_label, button_display }) => {
  return (
    <div className='navigation-bar'>
      <Logo to={logo_to} src={logo_src} />
      <ul className="nav-links">
        {nav_links.map((item, index) => (
          <li key={index}>
            <PrimaryLink to={item.link} label={item.label} />
          </li>
        ))}
      </ul>
      <PrimaryButton to={button_to} label={button_label} display_style={button_display} />
    </div>
  );
};

export default NavigationBar;
