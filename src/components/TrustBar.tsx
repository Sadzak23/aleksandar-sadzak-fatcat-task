import { FC } from 'react';

import Marquee from 'react-fast-marquee';

import { ITrustBarProps } from '@homework-task/types/IComponents';

export const TrustBar: FC<ITrustBarProps> = ({ images }) => (
    <Marquee>
        {images.map((image) => (
            <img width={100} key={image} src={image} className="mx-10" />
        ))}
    </Marquee>
);
