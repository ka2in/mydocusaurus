import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { BookOpen, Translate, ShieldCheck } from '@phosphor-icons/react';

const FeatureList = [
  {
    title: 'Enterprise Documentation',
    Icon: BookOpen,
    description: (
      <>
        Technical resources, tooling guides, and documentation strategy for SaaS and regulated industries.
      </>
    ),
    link: '/guides/enterprise-documentation/',
  },
  {
    title: 'Localization & Multilingual Content',
    Icon: Translate,
    description: (
      <>
        Insights on TMS workflows, terminology governance, and multilingual content strategy.
      </>
    ),
    link: '/guides/localization-multilingual/',
  },
  {
    title: 'Open Web & Digital Rights',
    Icon: ShieldCheck,
    description: (
      <>
        Critical analysis of decentralized platforms, web3 protocols, and open infrastructure from a technical communication lens.
      </>
    ),
    link: '/guides/open-web-digital-rights/',
  },
];

function Feature({Icon, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link} className={styles.featureCard}>
        <div className="text--center">
          <div className={styles.iconWrapper}>
            <Icon size={72} weight="duotone" className={styles.featureIcon} />
          </div>
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
