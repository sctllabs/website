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
    name: 'Docs',
    href: 'https://docs.sctl.xyz/'
  }
];

export const socialList: SocialListType[] = [
  {
    id: 'twitter',
    link: 'https://twitter.com/societal_xyz'
  },
  {
    id: 'discord',
    link: 'https://discord.gg/pU7TVvRVdh'
  },
  {
    id: 'github',
    link: 'https://github.com/sctllabs/website'
  },
  {
    id: 'medium',
    link: 'https://medium.com/@societal.xyz'
  },
  {
    id: 'email',
    link: 'mailto:info@sctl.xyz'
  }
];
