import { ABOUT, BENEFITS, PRODUCT } from './paths';

export const BANNER_TITLES = [
  'Society',
  'Web',
  'Organizations',
  'Work',
  'Community'
];

export const CARDS_HOME_PAGE = [
  {
    title: 'Infrastructure for the next generation of DAOs',
    description:
      'Decentralized frameworks are the future of industry. We need trustless, inclusive, and interconnected systems now more than ever.',
    img: '/images/home-card-2.png',
    descriptionMaxWidth: 308,
    href: BENEFITS
  },
  {
    title: 'Technology for a new age of human coordination',
    description:
      'Societal’s web3-native operating system is streamlined, EVM-compatible, and modular - a powerful toolkit for DAOs at every stage.',
    img: '/images/home-card-3.png',
    descriptionMaxWidth: 333,
    href: PRODUCT
  },
  {
    title: 'On a solarpunk mission to build Society 3.0',
    description:
      'Our definition of progress is a more open, self-sustainable, and fairer society.',
    img: '/images/home-card-1.png',
    href: ABOUT
  }
];
