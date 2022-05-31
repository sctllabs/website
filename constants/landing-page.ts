import photoTylerGellatly from 'public/images/team/tyler-gellatly.png';
import photogReameFox from 'public/images/team/greame-fox.png';
import photoKiimFournier from 'public/images/team/kiim-fournier.png';
import photoMaxKudinov from 'public/images/team/max-kudinov.png';

import { ReactComponent as Member } from 'public/images/icons/member.svg';
import { ReactComponent as Identity } from 'public/images/icons/identity-voting.svg';
import { ReactComponent as Voting } from 'public/images/icons/voting.svg';
import { ReactComponent as Nft } from 'public/images/icons/nft-voting.svg';
import { ReactComponent as Ownership } from 'public/images/icons/ownership-voting.svg';
import { ReactComponent as General } from 'public/images/icons/general-voting.svg';
import { ReactComponent as Social } from 'public/images/icons/social.svg';
import { ReactComponent as Bulb } from 'public/images/icons/bulb.svg';
import { ReactComponent as Defi } from 'public/images/icons/defi.svg';
import { ReactComponent as Investment } from 'public/images/icons/investment.svg';
import { ReactComponent as Projects } from 'public/images/icons/projects.svg';
import { ReactComponent as Guilds } from 'public/images/icons/guilds.svg';

export const banner = {
  titles: ['Organizations', 'Society', 'Work', 'Community', 'Reimagined']
};

export const about = {
  title: 'A Fit For Every Industry',
  description1:
    'A DAO creation & management platform that empowers communities to create, manage and collaborate in a trustless environment, removing the friction of using multiple siloed DAO tooling products.',
  description2:
    'Societal is a highly specialized layer-1 blockchain that makes it possible for anyone to build their own DAO and benefit from a gas free, token agnostic environment.',
  items: [
    {
      icon: Bulb,
      title: 'Creators'
    },
    {
      icon: Defi,
      title: 'DeFi'
    },
    {
      icon: Investment,
      title: 'Investment'
    },
    {
      icon: Social,
      title: 'Social'
    },
    {
      icon: Projects,
      title: 'Projects'
    },
    {
      icon: Guilds,
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

export const governance = {
  title: 'Governance',
  description1:
    'There is no one-size-fits-all governance model. Societal offers the following standardized models for DAO creators, plus the flexibility to create your own utilizing the custom governance builder.',
  description2:
    'Our plan is to pioneer novel governance models, and support individual DAOs using the platform to customize, implement, and share their own unique solutions.',
  items: [
    {
      icon: Member,
      title: 'One Member, One Vote'
    },
    {
      icon: Identity,
      title: 'Identity & Credential Weighted Voting'
    },
    {
      icon: Voting,
      title: 'Nominated Voting'
    },
    {
      icon: Nft,
      title: 'NFT and Token Voting'
    },
    {
      icon: Ownership,
      title: 'Ownership Weighted Voting'
    },
    {
      icon: General,
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
      twitter: 'https://twitter.com/g3llatly',
      linkedin: 'https://www.linkedin.com/in/tngell'
    },
    {
      title: 'Graeme Fox',
      text: 'Co-Founder',
      img: photogReameFox,
      twitter: 'https://twitter.com/Graeme_Fox',
      linkedin: 'https://www.linkedin.com/in/graemefox'
    },
    {
      title: 'Kim Fournier',
      text: 'Co-Founder',
      img: photoKiimFournier,
      twitter: 'https://twitter.com/kimfour01',
      linkedin: 'https://www.linkedin.com/in/kimjfournier'
    },
    {
      title: 'Max Kudinov',
      text: 'Technical Advisor',
      img: photoMaxKudinov,
      twitter: 'https://twitter.com',
      linkedin: ''
    }
  ]
};

export const sliderItems = [
  'Private Assets & Voting',
  'Built-in MultiSig',
  'Zero Gas Fees',
  'Chain Agnostic',
  'Cross-DAO Marketplace',
  'Built-in Governance'
];
