import React from 'react';
import Image from 'next/image';

function Footer() {
    return (
        <footer className="diagnal_footer">
            <div className="container">
                <div className="grid_one_container">
                    <div className="d_grid_1">
                        <a>
                            <span>Contact Us</span>
                        </a>
                        <a>
                            <span>Faq</span>
                        </a>
                        <a>
                            <span>Terms of Use</span>
                        </a>
                        <a>
                            <span>Privacy Policy</span>
                        </a>
                    </div>
                </div>
                <div className="grid_two_container">
                    <div className="d_grid_container">
                        <div className="d_grid_2">
                            <span className="icon_container icon_container_f">
                                <i className="fab fa-instagram"></i>
                            </span>
                            <span className="icon_container icon_container_i">
                                <i className="fab fa-facebook-f"></i>
                            </span>
                            <Image
                                src="/images/google-play.png"
                                width={107}
                                height={35}
                                alt="Diagnal"
                                className='playstore'
                            />
                            <Image
                                src="/images/app-store.png"
                                width={107}
                                height={35}
                                alt="Diagnal"
                                className='applestore'

                            />
                        </div>
                    </div>
                    <div className="water_mark">Diagnal © 2021 </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
