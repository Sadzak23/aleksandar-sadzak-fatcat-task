import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface ICard {
    title: string;
    image: string;
    description: string;
    background?: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
    buttonText: string;
}

export interface ICardsProps {
    cards: ICard[];
}

export interface IButtonProps {
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
    disabled?: boolean;
    className?: string;
    children: ReactNode;
}

export interface IHeroProps {
    title: string;
    image: string;
}

export interface IItemsShowcaseProps {
    items: {
        title: string;
        description: string;
    }[];
}

export interface IPanelShowcaseProps {
    items: {
        title: string;
        description: string;
        image: string;
    }[];
}

export interface ITrustBarProps {
    images: string[];
}

export interface ITableColumn {
    id: string;
    label: string;
}
