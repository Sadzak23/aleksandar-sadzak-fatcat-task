import { FC, MouseEventHandler, ReactNode } from 'react';

import { clsx } from 'clsx';

interface Props {
    onClick: MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children: ReactNode;
}

export const Button: FC<Props> = ({ children, onClick, className }) => (
    <button
        className={clsx('rounded-lg px-4 py-2 bg-black text-white', className)}
        onClick={onClick}
    >
        {children}
    </button>
);
