import { IconNamesType } from '../components/UI-kit/Icon';

interface SocialListType {
  id: IconNamesType;
  link: string;
}

export const menuList = [
  {
    id: 'about',
    name: 'About'
  },
  {
    id: 'features',
    name: 'Features'
  },
  {
    id: 'governance',
    name: 'Governance'
  },
  {
    id: 'polkadot-benefits',
    name: 'PolkadotBenefits'
  },
  {
    id: 'team',
    name: 'Team'
  },
  {
    id: 'docs',
    name: 'Docs'
  }
];

export const socialList: SocialListType[] = [
  {
    id: 'twitter',
    link: 'https://google.com'
  },
  {
    id: 'discord',
    link: 'https://google.com'
  },
  {
    id: 'github',
    link: 'https://google.com'
  },
  {
    id: 'reddit',
    link: 'https://google.com'
  },
  {
    id: 'email',
    link: 'https://google.com'
  }
];
