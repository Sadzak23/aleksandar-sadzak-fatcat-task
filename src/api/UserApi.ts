import axios from 'axios';

import { IUser } from '@homework-task/types/IUser';

export const getUsers = () =>
    axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(({ data }) => data as IUser[]);
