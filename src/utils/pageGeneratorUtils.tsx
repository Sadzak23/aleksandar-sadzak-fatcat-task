import { Button } from '@homework-task/components/Button';
import { Cards } from '@homework-task/components/Cards';
import { Hero } from '@homework-task/components/Hero';
import { ItemsShowcase } from '@homework-task/components/ItemsShowcase';
import { Layout } from '@homework-task/components/Layouts/Layout';
import { RowLayout } from '@homework-task/components/Layouts/RowLayout';
import { PanelShowcase } from '@homework-task/components/PanelShowcase';
import { TrustBar } from '@homework-task/components/TrustBar';
import { UsersList } from '@homework-task/components/Users/UsersList';
import {
    IComponentItem,
    IPageGeneratorDataItem,
} from '@homework-task/types/IGeneratorData';

export const createPageComponent = (item: IComponentItem) => {
    switch (item.type) {
        case 'button':
            return <Button key={item.id} {...item.props} />;
        case 'cards':
            return <Cards key={item.id} {...item.props} />;
        case 'hero':
            return <Hero key={item.id} {...item.props} />;
        case 'itemShowcase':
            return <ItemsShowcase key={item.id} {...item.props} />;
        case 'panelShowcase':
            return <PanelShowcase key={item.id} {...item.props} />;
        case 'trustBar':
            return <TrustBar key={item.id} {...item.props} />;
        case 'usersList':
            return <UsersList key={item.id} />;
    }
};

export const createPageDataItem = (dataItem: IPageGeneratorDataItem) => {
    switch (dataItem.layout.type) {
        case 'column':
            return (
                <Layout key={dataItem.id} {...dataItem.layout.props}>
                    {dataItem.components.map((c) => createPageComponent(c))}
                </Layout>
            );
        case 'row':
            return (
                <RowLayout key={dataItem.id} {...dataItem.layout.props}>
                    {dataItem.components.map((c) => createPageComponent(c))}
                </RowLayout>
            );
    }
};
