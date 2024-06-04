import { WithClassName } from '@/types';

export type IconId =
    | 'icon-arrow-right'
    | 'icon-cross_20'
    | 'icon-star_20'
    | 'icon-hamburger_24'
    | 'icon-coinbase_24'
    | 'icon-metamask_24'
    | 'icon-wallet-connect_24'
    | 'icon-atom_30'
    | 'icon-bank_30'
    | 'icon-chart-candles_30'
    | 'icon-shield_30'
    | 'icon-wallet_30'
    | 'icon-arrows-cross_32'
    | 'icon-arrows-diagonal_32'
    | 'icon-arrows-outer_32'
    | 'icon-arrows-triangle_32'
    | 'icon-arrows-two-top_32'
    | 'icon-coin-exchange_30'
    | 'icon-return-of-investments_32'
    | 'icon-shopping-bag_32'
    | 'icon-tag_32'
    | 'icon-logo-vertical_48';

export type IconProps = WithClassName<{
    id: IconId;
}> &
    React.SVGProps<SVGSVGElement>;
