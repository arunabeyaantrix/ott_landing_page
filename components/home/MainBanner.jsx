import React from 'react';

function MainBanner() {
    return (
        <div className="main-banner-diagnal">
            <div className="container">
                <div className="row">
                    <div className="col-xl-5 col-lg-7 diagnal-text-content">
                        <p className='d-title'>Watch everywhere and anywhere.</p>
                        <h3>Unlimited movies, TV shows, and more.</h3>
                        <p className='d-subtitle'>
                            Best video quality at 4k with HDR. Enjoy
                            simultaneously on 4 screens. Watch on your TV,
                            computer, phone and tablet. Cancel anytime. Includes
                            free trial for first 14 days
                        </p>
                        <button className='diagnal-btn'>
                            Get Started
                        </button>
                        <br/>
                        <p className="plans-view">
                        Ready to watch? Click get started to view our plans
                        </p>
                    </div>
                    <div className="col-xl-7 col-lg-5"></div>
                </div>
            </div>
        </div>
    );
}

export default MainBanner;
