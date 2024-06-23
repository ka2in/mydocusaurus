import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data',
    Svg: require('@site/static/img/javascript_illustration.svg').default,
    description: (
      <>
        The first layer of our stack: Data is the foundation of the conceptual building. Tech & Intellect provides content about data-centered topics such as data for good, data analytics, and data protection.
      </>
    ),
  },
  {
    title: 'Information',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The middle layer between data and knowledge: Information is the oil of the 21st century. Tech & Intellect discusses how individuals can become proactive members of the information society.
      </>
    ),
  },
  {
    title: 'Knowledge',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        The top tier of our stack. Extracting knowledge from information involves applying the right methodologies. Tech & Intellect explores the multiple models and approaches for knowledge extraction.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
