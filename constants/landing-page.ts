import { IconNamesType } from 'components/UI-kit/Icon';

import photoTylerGellatly from 'public/images/team/tyler-gellatly.png';
import photogReameFox from 'public/images/team/greame-fox.png';
import photoKiimFournier from 'public/images/team/kiim-fournier.png';
import photoMaxKudinov from 'public/images/team/max-kudinov.png';

interface SectionWithIconType {
  title: string;
  description1: string;
  description2: string;
  items: {
    icon: IconNamesType;
    title: string;
  }[];
}

export const about: SectionWithIconType = {
  title: 'A Fit For Every Industry',
  description1:
    'A DAO creation & management platform that empowers communities to create, manage and collaborate in a trustless environment, removing the friction of using multiple siloed DAO tooling products.',
  description2:
    'Societal is a highly specialized layer-1 blockchain that makes it possible for anyone to build their own DAO and benefit from a gas free, token agnostic environment.',
  items: [
    {
      icon: 'bulb',
      title: 'Creators'
    },
    {
      icon: 'defi',
      title: 'DeFi'
    },
    {
      icon: 'investment',
      title: 'Investment'
    },
    {
      icon: 'social',
      title: 'Social'
    },
    {
      icon: 'projects',
      title: 'Projects'
    },
    {
      icon: 'guilds',
      title: 'Guilds'
    }
  ]
};

export const features = {
  title: 'Key Platform Features',
  list: [
    {
      title: 'Create',
      text: 'No code needed. Anyone can create their own DAO, choose their governance structure, token standard, and treasury guidelines.'
    },
    {
      title: 'Transition',
      text: 'Societal can help Web3 projects transform their treasury and governance into a fully community-governed project.'
    },
    {
      title: 'Transfer',
      text: 'DAOs created on any layer-1 can easily move to the Societal platform, access a full suite of DAO management tooling, and benefit from a zero gas fee environment.'
    },
    {
      title: 'Manage',
      text: 'Once a DAO is created, transitioned, or transferred, Societal can help seamlessly manage operations. Societal’s management suite includes job boards, payroll, treasury, accounting, and governance. Web and mobile friendly.'
    }
  ]
};

export const governance: SectionWithIconType = {
  title: 'Governance',
  description1:
    'There is no one-size-fits-all governance model. Societal offers the following standardized models for DAO creators, plus the flexibility to create your own utilizing the custom governance builder.',
  description2:
    'Our plan is to pioneer novel governance models, and support individual DAOs using the platform to customize, implement, and share their own unique solutions.',
  items: [
    {
      icon: 'member',
      title: 'One Member, One Vote'
    },
    {
      icon: 'identity-voting',
      title: 'Identity & Credential Weighted Voting'
    },
    {
      icon: 'voting',
      title: 'Nominated Voting'
    },
    {
      icon: 'nft-voting',
      title: 'NFT and Token Voting'
    },
    {
      icon: 'ownership-voting',
      title: 'Ownership Weighted Voting'
    },
    {
      icon: 'general-voting',
      title: 'General Council and Technical Committee Voting'
    }
  ]
};

export const polkadot = {
  title: 'The Future is DAO',
  text: 'Building within the Polkadot ecosystem, Societal will be interconnected to application-specific DeFi, Privacy, Identity, and Metaverse blockchains, and plans to vertically integrate their functionality into the core product offering.'
};

export const team = {
  title: 'Our Team',
  items: [
    {
      title: 'Tyler Gellatly',
      text: 'Co-Founder',
      img: photoTylerGellatly,
      twitter: 'https://twitter.com'
    },
    {
      title: 'Greame Fox',
      text: 'Co-Founder',
      img: photogReameFox,
      twitter: 'https://twitter.com'
    },
    {
      title: 'Kiim Fournier',
      text: 'Co-Founder',
      img: photoKiimFournier,
      twitter: 'https://twitter.com'
    },
    {
      title: 'Max Kudinov',
      text: 'Technical Advisor',
      img: photoMaxKudinov,
      twitter: 'https://twitter.com'
    }
  ]
};
