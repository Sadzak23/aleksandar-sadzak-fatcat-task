import { FC } from 'react';

import Marquee from 'react-fast-marquee';

interface Props {
    images: string[];
}

export const TrustBar: FC<Props> = ({ images }) => (
    <Marquee>
        {images.map((image) => (
            <img width={100} key={image} src={image} className="mx-10" />
        ))}
    </Marquee>
);
