import { FC } from 'react';

import { clsx } from 'clsx';

import { ILayoutProps } from '@homework-task/types/ILayout';

export const Layout: FC<ILayoutProps> = ({ background, children }) => (
    <section className={clsx('p-20', background)}>{children}</section>
);
