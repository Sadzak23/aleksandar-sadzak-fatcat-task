import { FC } from 'react';

import { clsx } from 'clsx';

import { ILayoutProps } from '@homework-task/types/ILayout';

export const Layout: FC<ILayoutProps> = ({ title, background, children }) => (
    <section className={clsx('p-20', background)}>
        {title && (
            <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>
        )}
        {children}
    </section>
);
