# FatCatCoders Homework task

This project is made as a homework task for the FatCatCoders.

## Table of Contents

-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [Technologies Used](#technologies-used)
-   [License](#license)

## Features

-   [List Component](#list-component)
-   [Form Builder](#form-builder)
-   [Page Builder](#page-builder)
-   [Page Sections](#page-sections-with-different-layouts)

### List Component

React component that is both scalable and reusable, designed to fetch and
display data from an API in a list format.

### Form Builder

A scalable and reusable React component with the
following capabilities:

-   **Validation Schema:** Accept a validation schema prop to ensure form data adheres to specified rules.
-   **API Hook Call:** Incorporate an API hook that handles states such as data, isLoading, and isError.
-   **Callback Function for Form Rendering:** A callback function prop (renderForm) that renders the form elements and handles their state appropriately.

Here is an example of the props that the component can accept:

```ts
const formProps: IFormGeneratorProps<IFormData> = {
    validationSchema: z.object({
        title: z
            .string()
            .min(1, 'Title is required')
            .max(30, 'Title must be 30 characters or less'),
        body: z
            .string()
            .min(1, 'Body is required')
            .max(150, 'Body must be 150 characters or less'),
    }),
    successMessage: 'Form submitted successfully.',
    useMutation: useFormSubmit,
    renderForm: ({ register, errors }: IRenderFormProps) => (
        <>
            <TextInput
                label="Title"
                id="title"
                register={register}
                required
                errors={errors}
            />
            <TextareaInput
                label="Body"
                id="body"
                register={register}
                required
                errors={errors}
            />
        </>
    ),
};
```

### Page Builder

This is a reusable React component for
building web pages. It can handle a variety of page layouts and components
dynamically, based on the props it receives.

Here is an example of the props that the component can accept:

```ts
const pageData = [
    {
        id: 'catCards',
        layout: {
            type: 'column',
            props: {
                title: 'Cats',
                background: 'bg-yellow',
            },
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
        ],
    },
];
```

With this data you can create a page like this:

```ts
<PageGenerator data={pageData} />
```

### Page Sections With Different Layouts

Currently, there are two layouts: **row** and **column**, but it's easy enough to add other layouts.

## Installation

#### 1. Clone the repo:

     git clone https://github.com/Sadzak23/aleksandar-sadzak-fatcat-task.git

#### 2. Install Dependencies:

     npm install

## Usage

#### 1. Run the Development Server:

     npm run dev

#### 2. Go to the browser

     http://localhost:3000

## Technologies Used

-   [React](https://react.dev)
-   [TypeScript](https://www.typescriptlang.org)
-   [React Hook Form](https://react-hook-form.com)
-   [Zod](https://zod.dev)
-   [React Query](https://tanstack.com/query/latest/docs/react/overview)
-   [Axios](https://axios-http.com/docs/intro)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
