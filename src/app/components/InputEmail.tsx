import React, { ChangeEvent } from 'react';

interface InputEmailProps {
  type: 'text' | 'email';
  name: string;
  placeholder: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const InputEmail: React.FC<InputEmailProps> = ({
  type = 'email',
  name,
  placeholder,
  onChange,
  value
}) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="email-input"
      onChange={handleChange}
      value={value}
    />
  );
};

export default InputEmail;
