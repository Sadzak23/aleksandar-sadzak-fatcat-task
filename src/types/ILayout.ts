import { ReactNode } from 'react';

export interface ILayout {
    type: LayoutType;
    props?: ILayoutProps;
}

export interface ILayoutProps {
    background?: string;
    children?: ReactNode;
}

export type LayoutType = 'column' | 'row';
