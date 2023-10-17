import React from 'react';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import NewsletterBanner from '../components/NewsletterBanner';

const nav_links = [
  { link: '/', label: 'Home' },
  { link: '/', label: 'About us' },
  { link: '/', label: 'Services' },
  { link: '/', label: 'Contact' }
];

const footer_links = [
  { link: '/', label: 'Terms' },
  { link: '/', label: 'Privacy' },
  { link: '/', label: 'Cookies' }
];

export default function Page() {
  return (
    <>
      <NavigationBar
        logo_to={'/'}
        logo_src={'proline.svg'}
        nav_links={nav_links}
        button_to="#newsletter"
        button_label="Subscribe"
      />
      <Banner
        header={"Ignite your business with digital marketing"}
        paragraph={"Meet Certainty, Ignite Visibility’s proprietary digital marketing forecasting system. Subscribe to our newsletter to know more!"}
        button_to={"#newsletter"}
        button_label={"Subscribe"}
        image_src={"/picture_marketing.png"}
        button_display={'block'}
      />
      <NewsletterBanner
        header="The best marketing newsletter"
        paragraph="Get the latest news about digital marketing!"
        background_image="/marketing.png"
      />
      <Footer credits={'2023 © Flávio Mamede'} footer_links={footer_links} />
    </>
  );
};
