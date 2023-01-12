import { ABOUT, BENEFITS, PRODUCT } from './paths';

export const BANNER_TITLES = [
  'Organizations 3.0.',
  'Work 3.0.',
  'Community 3.0.',
  'Society 3.0.'
];

export const CARDS_HOME_PAGE = [
  {
    title: 'On a solarpunk mission to build Society 3.0',
    description:
      'Our definition of progress is the realization of a more open, self-sustainable, and fair society.',
    img: '/images/home-card-1.png',
    href: ABOUT
  },
  {
    title: 'Governance. On-chain. Gasless',
    description:
      'DAO governance models are evolving, and we need trustless, verifiable, and inclusive systems now more than ever.',
    img: '/images/home-card-2.png',
    descriptionMaxWidth: 308,
    href: BENEFITS
  },
  {
    title: 'Technology for a new age of human coordination',
    description:
      'Societal’s web3-native operating system is streamlined, EVM-compatible, and modular - a powerful toolkit for the entire DAO lifecycle.',
    img: '/images/home-card-3.png',
    descriptionMaxWidth: 355,
    href: PRODUCT
  }
];
