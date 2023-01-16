export enum ProductPageAnimationType {
  create = 'create',
  decentralize = 'decentralize',
  transfer = 'transfer',
  manage = 'manage'
}

const TEXT_TILES_PRODUCT_PAGE = [
  {
    id: ProductPageAnimationType.create,
    title: 'Create',
    description:
      'Build a specialized DAO in minutes. No coding experience required.'
  },
  {
    id: ProductPageAnimationType.decentralize,
    title: 'Decentralize',
    description:
      'Transition a protocol or DApp into a community-operated DAO. Progressive decentralization is a feature, not a bug.'
  },
  {
    id: ProductPageAnimationType.transfer,
    title: 'Transfer',
    description:
      'Port an existing DAO the Societal network. Better coordination on a blockchain designed for this.'
  },
  {
    id: ProductPageAnimationType.manage,
    title: 'Manage',
    description:
      'Seamlessly manage every DAO operation in one dashboard. Web and mobile friendly.'
  }
];

export default TEXT_TILES_PRODUCT_PAGE;
