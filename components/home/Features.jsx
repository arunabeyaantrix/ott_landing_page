import React from 'react';
import Image from 'next/image';

const features = [
    {
        id: '1',
        title: 'Unbelievable detail at 4K',
        width: 30,
        height: 30,
        icon: '/images/vector2.png',
        subtitle:
            'Amet risus nullam eget felis eget. Faucibus scelerisque eleifend donec pretium vulputate sapien. Justo nec ultrices dui sapien eget mi proin sed libero.',
    },
    {
        id: '2',
        title: 'Watch with family & friends',
        width: 40,
        height: 25.45,
        icon: '/images/vector.png',
        subtitle:
            'Laoreet id donec ultrices tincidunt arcu non sodales neque sodales. Arcu dui vivamus arcu felis. Est velit egestas dui id ornare arcu odio.',
    },
    {
        id: '3',
        title: 'Intelligently personalized',
        width: 22.11,
        height: 30,
        icon: '/images/vector1.png',
        subtitle:
            'Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Libero id faucibus nisl tincidunt. Dui faucibus in ornare quam. ',
    },
];

function Features() {
    return (
        <div className="diagnal-features">
            <div className="container ">
                <div className="row">
                    {features.map((feature) => (
                        <div className="col-md-4" key={feature.id}>
                            <div className="feature-img">
                                <Image
                                    src={feature.icon}
                                    alt="Diagnal"
                                    width={feature.width}
                                    height={feature.height}
                                />
                            </div>

                            <p className="feature_title">{feature.title}</p>
                            <p className="feature_subtitle">
                                {feature.subtitle}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Features;
