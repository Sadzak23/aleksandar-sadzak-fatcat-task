import { FC } from 'react';

import { clsx } from 'clsx';

import { Button } from '@homework-task/components/Button';

import type { ICard } from '@homework-task/types/ICard';

interface Props {
    /* 
    If the card interface is being used in the app other than in the Card component,
    then I would create a separate reusable interface like this.
    If not, an inline declaration is sufficient and more readable.
    */
    cards: ICard[];
}

export const Cards: FC<Props> = ({ cards }) => (
    <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 gap-8 w-8/12">
            {cards.map(
                ({
                    title,
                    image,
                    description,
                    background,
                    onClick,
                    buttonText,
                }) => (
                    <div
                        key={title}
                        className={clsx('rounded-md', 'p-8', background)}
                    >
                        <img src={image} alt="Icon" width="120" />
                        <div className="my-8">
                            <div className="text-2xl font-bold mb-2">
                                {title}
                            </div>
                            <div className="text-xl">{description}</div>
                        </div>
                        <Button onClick={onClick}>{buttonText}</Button>
                    </div>
                )
            )}
        </div>
    </div>
);
