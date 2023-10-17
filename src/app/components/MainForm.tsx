"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import PrimaryButton from './PrimaryButton';
import InputEmail from './InputEmail';

interface MainFormProps {
  input_name1: string;
  input_type1: 'text' | 'email';
  input_placeholder1: string;
  input_name2: string;
  input_type2: 'text' | 'email';
  input_placeholder2: string;
  button_label: string;
  initialEmail?: string;
  initialName?: string;
  display_style?: 'block' | 'none';
}

const MainForm: React.FC<MainFormProps> = ({
  button_label,
  input_name1,
  input_type1,
  input_placeholder1,
  input_name2,
  input_type2,
  input_placeholder2,
  initialEmail = '',
  initialName = '',
  display_style = '',
}) => {
  const pathname = usePathname();
  console.log('pathname:', pathname);

  const [name, setName] = useState<string>(initialName);
  const [email, setEmail] = useState<string>(initialEmail);
  const [message, setMessage] = useState<string | null>(null);

  const formStyle: React.CSSProperties = {
    display: display_style,
  };

  const getInterestFromRoute = () => {
    if (pathname.includes('marketing')) {
      return 'Marketing Agency';
    } else if (pathname.includes('construction')) {
      return 'Construction Company';
    } else {
      return '';
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://develop--lighthearted-scone-97be6c.netlify.app/v1/subscribe',
        {
          full_name: name,
          email,
          interest: getInterestFromRoute(),
        }
      );

      console.log(response.data);
      setMessage('Successfully subscribed!');
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again later.');
    }

    console.log('Data to be sent:', {
      full_name: name,
      email,
      interest: getInterestFromRoute(),
    });
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="main-form" style={formStyle}>
        <InputEmail
          type={input_type1}
          name={input_name1}
          placeholder={input_placeholder1}
          onChange={handleNameChange}
          value={name}
        />
        <InputEmail
          type={input_type2}
          name={input_name2}
          placeholder={input_placeholder2}
          onChange={handleEmailChange}
          value={email}
        />
        <PrimaryButton label={button_label} type="submit" />
      </form>
      {<p className="success-message">{message}</p> && <p className="error-message">{message}</p>}
    </>
  );
};

export default MainForm;
