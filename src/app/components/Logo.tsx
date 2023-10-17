import React from 'react';
import Image from 'next/image';

interface LogoProps {
  to: string;
  src: string;
}

const Logo: React.FC<LogoProps> = ({ to, src }) => {
  return (
    <a href={to}>
      <Image
        src={src}
        alt="Terra Logo"
        className="logo"
        width={135}
        height={35}
        priority
      />
    </a>
  );
};

export default Logo;
