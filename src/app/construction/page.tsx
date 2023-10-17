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
    <div>
      <NavigationBar
        logo_to={'/'}
        logo_src={'terra.svg'}
        nav_links={nav_links}
        button_to="#"
        button_label={"Subscribe"}
        button_display={"none"}
      />
      <Banner
        header={"We care about your building"}
        paragraph={"We build with knowledge and care. Do you want to know our secret? Subscribe to our newsletter to know more!"}
        button_to={"#newsletter"}
        button_label={"Subscribe"}
        image_display={'none'}
        background_image={'/construction.png'}
        button_display={'block'}
      />
      <NewsletterBanner
        header="The best construction newsletter"
        paragraph="Get the latest news about construction!"
      />
      <Footer credits={'2023 © Flávio Mamede'} footer_links={footer_links} />
    </div>
  );
};
