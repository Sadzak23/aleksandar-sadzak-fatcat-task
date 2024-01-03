import { IBasicData } from '@homework-task/types/IBasic';
import { ITableColumn } from '@homework-task/types/IComponents';

interface Props<IDataItem extends IBasicData> {
    data: IDataItem[];
    columns: ITableColumn[];
}

export function Table<IDataItem extends IBasicData>({
    data,
    columns,
}: Props<IDataItem>) {
    return (
        <table className="user-table">
            <thead>
                <tr>
                    {columns.map((e) => (
                        <th key={e.id}>{e.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((e) => (
                    <tr key={e.id}>
                        {columns.map((col) => (
                            <td key={col.id}>
                                {(e[col.id as keyof IDataItem] as
                                    | string
                                    | number) || '/'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
