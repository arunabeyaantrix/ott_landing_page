import React from 'react';
import dynamic from 'next/dynamic';

import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = dynamic(() => import('../components/shared/Navbar'));
const Footer = dynamic(() => import('../components/shared/Footer'));
const Header = dynamic(() => import('../components/shared/Head'));
const MainBanner = dynamic(() => import('../components/home/MainBanner'));
const Features = dynamic(() => import('../components/home/Features'));
// const FAQ = dynamic(() => import('../components/home/FAQ'));
import FAQ from '../components/home/Faq'
const Devices = dynamic(() => import('../components/home/Devices'));
const Channels = dynamic(() => import('../components/home/Channels'));
const Contents = dynamic(() => import('../components/home/Contents'));
const ContentsMob = dynamic(() => import('../components/home/ContentsMob'));

export default function Home() {
    return (
        <>
            <Header />
            <div className='banner_wrapper'>
                <Navbar />
                <MainBanner />
            </div>
            <Features />
            <Devices />
            <div className='content_web'>
                <Contents />
            </div>
            <div className='content_mob'>
                <ContentsMob />
            </div>
           
            <Channels/>
            <FAQ />
            <Footer />
        </>
    );
}
