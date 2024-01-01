import { FC, ReactNode } from 'react';

import { clsx } from 'clsx';

interface Props {
    background: string;
    children: ReactNode;
}

export const Layout: FC<Props> = ({ background, children }) => (
    <section className={clsx('py-20', background)}>{children}</section>
);
