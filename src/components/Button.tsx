import { FC } from 'react';

import { clsx } from 'clsx';

import { IButtonProps } from '@homework-task/types/IComponents';

export const Button: FC<IButtonProps> = ({
    children,
    onClick,
    type,
    disabled,
    className,
}) => (
    <button
        className={clsx('rounded-lg px-4 py-2 bg-black text-white', className)}
        disabled={!!disabled}
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);
