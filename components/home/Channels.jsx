import React from 'react';

let channels = [
    { src: '/images/1.png' },
    { src: '/images/2.png' },
    { src: '/images/3.png' },
    { src: '/images/4.png' },
    { src: '/images/5.png' },
    { src: '/images/6.png' },
    { src: '/images/7.png' },
    { src: '/images/8.png' },
    { src: '/images/9.png' },
    { src: '/images/10.png' },
    { src: '/images/11.png' },
    { src: '/images/12.png' },
    { src: '/images/13.png' },
    { src: '/images/14.png' },
    { src: '/images/15.png' },
];

function Channels() {
    return (
        <div className="diagnal-channels">
            <div className="container">
                <div className="channel_container">
                    <p className="channel_title">
                        Live TV Guide and catch up TV
                    </p>
                    <h1 className="channel_heading">
                        Enjoy Our Live Channels.
                    </h1>
                    <p className="channel_subtitle">
                        Enjoy all your favourite channels in one place with
                        DIAGNAL ENLIGHT.
                    </p>
                </div>
                <div className="channel_grid">
                    {channels.map((channel) => (
                        <img
                            src={channel.src}
                            key={channel.src}
                            alt="Diagnal"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Channels;
