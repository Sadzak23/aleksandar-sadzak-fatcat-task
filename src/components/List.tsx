import { ReactNode } from 'react';

import { UseQueryResult } from '@tanstack/react-query';

interface Props<IData> {
    useQueryHook: () => UseQueryResult<IData[], Error>;
    renderitems: (data: IData[]) => ReactNode;
}

export function List<IData>({ useQueryHook, renderitems }: Props<IData>) {
    const { data, error, isLoading } = useQueryHook();

    return isLoading ? (
        <p>Loading...</p>
    ) : error ? (
        <p className="error">{error.message}</p>
    ) : data ? (
        <div>{renderitems(data)}</div>
    ) : null;
}
