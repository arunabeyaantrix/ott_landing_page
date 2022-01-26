import React from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
const options = {
    items: 4,
    loop: true,
    nav: false,
    autoplay: true,
    margin: 120,
    dots: false,
    responsive: {
        0: {
            items: 2,
        },
        450:{
            items:3
        },
        768: {
            items: 4,
        },
        1200: {
            items: 4,
        },
        1500: {
            items: 4,
        },
    },
};

const contents = [
    { src: '/images/content1.png', title: 'Exclusive Orginals' },
    { src: '/images/content2.png', title: 'Popular Films' },
    { src: '/images/content3.png', title: 'New Releases' },
    { src: '/images/content4.png', title: 'Family Favourites' },
    { src: '/images/content5.png', title: 'Action & SCI-FI' },
    { src: '/images/content6.png', title: 'Indie Films' },
    { src: '/images/content7.png', title: 'Crime & Drama ' },
    { src: '/images/content8.png', title: 'Oscar Winners' },
];

function Contents() {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, []);
    return (
        <div className="diagnal-contents">
            <div className="container">
                <div className="content_details">
                    <p>Try before you buy</p>
                    <h1>Browse Our Content</h1>
                </div>
                {display ? (
                    <OwlCarousel
                        className="works-slides owl-carousel owl-theme"
                        {...options}>
                        {' '}
                        {contents.map((content) => (
                            <div
                                className="content_holder"
                                key={content.src}
                                style={{ background: `url(${content.src})` }}>
                                <div className="faded_content">
                                    <div>
                                        <p>{content.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </OwlCarousel>
                ) : (
                    ''
                )}
                {/* <div className="content-grid">
                   
                </div> */}
                <div className="browse_content">
                    <button className="diagnal-btn">Browse Content</button>
                </div>
            </div>
        </div>
    );
}

export default Contents;
