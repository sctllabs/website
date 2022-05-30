import { ReactComponent as Twitter } from 'public/images/icons/twitter.svg';
import { ReactComponent as Discord } from 'public/images/icons/discord.svg';
import { ReactComponent as Github } from 'public/images/icons/github.svg';
import { ReactComponent as Medium } from 'public/images/icons/medium.svg';
import { ReactComponent as Email } from 'public/images/icons/email.svg';

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

export const socialList = [
  {
    icon: Twitter,
    link: 'https://twitter.com/societal_xyz'
  },
  {
    icon: Discord,
    link: 'https://discord.gg/pU7TVvRVdh'
  },
  {
    icon: Github,
    link: 'https://github.com/sctllabs/website'
  },
  {
    icon: Medium,
    link: 'https://medium.com/@societal.xyz'
  },
  {
    icon: Email,
    link: 'mailto:info@sctl.xyz'
  }
];
