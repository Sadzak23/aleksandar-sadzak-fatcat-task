import { IPageGeneratorDataItem } from '@homework-task/types/IGeneratorData';

import cat from '../../public/media/cats/cat_5.png';
import cat2 from '../../public/media/cats/cat_6.png';
import cat3 from '../../public/media/cats/cat_7.png';
import cat4 from '../../public/media/cats/cat_8.png';
import cat5 from '../../public/media/cats/cat_9.png';

export const homePageData: IPageGeneratorDataItem[] = [
    {
        id: 'users',
        layout: {
            type: 'column',
        },
        components: [{ id: 'usersList', type: 'usersList' }],
    },
    {
        id: 'section2',
        layout: {
            type: 'column',
            props: { background: 'bg-yellow' },
        },
        components: [
            {
                id: 'catHero',
                type: 'hero',
                props: {
                    title: 'Hungry?',
                    image: cat,
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
    {
        id: 'section3',
        layout: {
            type: 'row',
            props: { background: 'bg-red' },
        },
        components: [
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
        ],
    },
];
