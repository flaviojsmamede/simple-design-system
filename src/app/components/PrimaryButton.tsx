import React from 'react';

interface PrimaryButtonProps {
  to?: string;
  label: string;
  display_style?: 'block' | 'none';
  type?: 'button' | 'submit';
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to='', label, type, display_style }) => {
  const buttonStyle: React.CSSProperties = {
    display: display_style ?? 'block'
  };

  return (
      <a href={to? to : ''} type={type? 'type' : 'button'} style={{ ...buttonStyle }}>
        <button className='primary-button'>
          {label}
        </button>
      </a>
  );
};

export default PrimaryButton;
