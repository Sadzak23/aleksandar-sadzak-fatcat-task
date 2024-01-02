import { FC } from 'react';

import { clsx } from 'clsx';

import { ILayoutProps } from '@homework-task/types/ILayout';

export const RowLayout: FC<ILayoutProps> = ({ background, children }) => (
    <section className={clsx('flex gap-3 p-20', background)}>
        {children}
    </section>
);
