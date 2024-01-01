import { MouseEventHandler } from 'react';

export interface ICard {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}
