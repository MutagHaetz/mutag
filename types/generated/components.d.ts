import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderGoodsOrderGood extends Schema.Component {
  collectionName: 'components_order_goods_order_goods';
  info: {
    displayName: 'OrderGood';
    icon: 'archive';
  };
  attributes: {
    good: Attribute.Relation<
      'order-goods.order-good',
      'oneToOne',
      'api::good.good'
    >;
    count: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order-goods.order-good': OrderGoodsOrderGood;
    }
  }
}
