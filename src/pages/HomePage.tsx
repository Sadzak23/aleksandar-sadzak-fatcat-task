import { FC } from 'react';

import cat from '@homework-task/assets/cats/cat_5.png';
import cat2 from '@homework-task/assets/cats/cat_6.png';
import cat3 from '@homework-task/assets/cats/cat_7.png';
import cat4 from '@homework-task/assets/cats/cat_8.png';
import cat5 from '@homework-task/assets/cats/cat_9.png';
import { PageGenerator } from '@homework-task/components/Generators/PageGenerator';
import { IPageGeneratorDataItem } from '@homework-task/types/IGeneratorData';
import { simpleFormProps } from '@homework-task/utils/simpleFormData';

const pageData: IPageGeneratorDataItem[] = [
    {
        id: 'users',
        layout: {
            type: 'column',
            props: {
                title: 'Users',
            },
        },
        components: [{ id: 'usersList', type: 'usersList' }],
    },
    {
        id: 'form',
        layout: {
            type: 'column',
            props: { title: 'Simple form', background: 'bg-mainGreen' },
        },
        components: [
            {
                id: 'form',
                type: 'form',
                props: simpleFormProps,
            },
        ],
    },
    {
        id: 'items',
        layout: {
            type: 'row',
            props: { title: 'Row section', background: 'bg-red' },
        },
        components: [
            {
                id: 'cards',
                type: 'cards',
                props: {
                    cards: [
                        {
                            image: cat,
                            title: 'Chef',
                            description: 'Hungry cat',
                            buttonText: 'Learn more',
                            onClick: () => {},
                        },
                        {
                            image: cat2,
                            title: 'Designer',
                            description: 'Creative cat',
                            buttonText: 'Learn more',
                            onClick: () => {},
                        },
                        {
                            image: cat4,
                            title: 'Athlete',
                            description: 'Sporty cat',
                            buttonText: 'Learn more',
                            onClick: () => {},
                        },
                    ],
                },
            },
            {
                id: 'items',
                type: 'itemShowcase',
                props: {
                    items: [
                        {
                            title: 'Item 1',
                            description: 'Item 1 description',
                        },
                        {
                            title: 'Item 2',
                            description: 'Item 2 description',
                        },
                        {
                            title: 'Item 3',
                            description: 'Item 2 description',
                        },
                        {
                            title: 'Item 4',
                            description: 'Item 2 description',
                        },
                    ],
                },
            },
        ],
    },
    {
        id: 'catsShow',
        layout: {
            type: 'column',
            props: { title: 'Column section', background: 'bg-yellow' },
        },
        components: [
            {
                id: 'catHero',
                type: 'hero',
                props: {
                    title: "Doesn't this look good?",
                    image: cat2,
                },
            },
            {
                id: 'catSlide',
                type: 'trustBar',
                props: {
                    images: [cat, cat2, cat3, cat4, cat5],
                },
            },
        ],
    },
];

export const HomePage: FC = () => {
    return <PageGenerator data={pageData} />;
};
