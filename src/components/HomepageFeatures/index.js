import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Enterprise Documentation',
    Svg: require('@site/static/img/enterprise-documentation.svg').default,
    description: (
      <>
      Technical resources, tooling guides, and documentation strategy for SaaS and regulated industries.
      </>
      ),
    },
    {
      title: 'Localization & Multilingual Content',
      Svg: require('@site/static/img/localization-multilingual.svg').default,
      description: (
        <>
        Insights on TMS workflows, terminology governance, and multilingual content strategy.
        </>
        ),
      },
      {
        title: 'Open Web & Digital Rights',
        Svg: require('@site/static/img/open-web.svg').default,
        description: (
          <>
          Perspectives on decentralized platforms, privacy, and open source tools for technical communicators.
          </>
          ),
        },
      ];
      
      function Feature({Svg, title, description}) {
        return (
          <div className={clsx('col col--4')}>
            <div className="text--center">
              <div className={styles.svgWrapper}>
                <Svg className={styles.featureSvg} role="img" />
              </div>
            </div>
            <div className="text--center padding-horiz--md">
              <Heading as="h3">{title}</Heading>
              <p>{description}</p>
            </div>
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
            