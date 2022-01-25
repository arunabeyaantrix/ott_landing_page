import React from 'react';
import Image from 'next/image';

function Devices() {
    return (
        <div className='diagnal_devices'>
            <div className="container">
                <div className="row ">
                    <div className="col-xl-7 col-lg-6 d-mob">
                        <div className='img-1'>
                            <Image src='/images/devices.png' width={646} height={387} alt="Diagnal" />
                        </div>
                        <div className='img-2'>
                            <Image src='/images/devices2.png' width={576} height={95} alt="Diagnal"/>
                        </div>
                        
                    </div>
                    <div className="col-xl-5 col-lg-6 desc-container">
                        <div className="device-desc">
                            <p className='devices-title'>Available on every device and platform</p>
                            <h3 className='devices-heading'>Watch Everywhere.</h3>
                            <p className='devices-subtitle'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
                            <ul className='devices-list'>
                                <li>Watch on Game Consoles</li>
                                <li>Available as a TV app</li>
                                <li>Watch on Web</li>
                                <li>Download our App for Mobile and Tablet </li>
                                <li>Unlimited Devices</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-6 d-web">
                        <div className='img-1'>
                            <Image src='/images/devices.png' width={646} height={387} alt="Diagnal" />
                        </div>
                        <div className='img-2'>
                            <Image src='/images/devices2.png' width={576} height={95} alt="Diagnal"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Devices;
