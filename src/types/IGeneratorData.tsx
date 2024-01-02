import {
    IButtonProps,
    ICardsProps,
    IHeroProps,
    IItemsShowcaseProps,
    IPanelShowcaseProps,
    ITrustBarProps,
} from '@homework-task/types/IComponents';
import { ILayout } from '@homework-task/types/ILayout';

export interface IPageGeneratorDataItem {
    id: string;
    layout: ILayout;
    components: IComponentItem[];
}

export type IComponentItem =
    | { id: string; type: 'button'; props: IButtonProps }
    | { id: string; type: 'cards'; props: ICardsProps }
    | { id: string; type: 'hero'; props: IHeroProps }
    | { id: string; type: 'itemShowcase'; props: IItemsShowcaseProps }
    | { id: string; type: 'panelShowcase'; props: IPanelShowcaseProps }
    | { id: string; type: 'trustBar'; props: ITrustBarProps }
    | { id: string; type: 'usersList' };
