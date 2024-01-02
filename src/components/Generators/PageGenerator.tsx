import { FC } from 'react';

import { IPageGeneratorDataItem } from '@homework-task/types/IGeneratorData';
import { createPageDataItem } from '@homework-task/utils/pageGeneratorUtils';

interface Props {
    data: IPageGeneratorDataItem[];
}

export const PageGenerator: FC<Props> = ({ data }) => {
    return <div>{data.map((e) => createPageDataItem(e))}</div>;
};
