import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'লেকচারসমূহ',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          ফিজিক্স এর চ্যাপ্টার সমূহের বিভিন্ন টপিক এবং বেসিক গুলো সহজ ভাবে ভিডিও ক্লাসের মাধ্যমে বোঝানো হয়েছে ।
      </>
    ),
  },
  {
    title: 'লাইভ ব্যাচ',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          এখানে বিভিন্ন ব্যাচে ইন্টার ১ম/২য় বর্ষের ফিজিক্স পড়ানো হয়ে থাকে । ব্যাচে ক্লাস করার জন্য আমাদের সাথে আজই যোগাযোগ করুন ।
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
        <h3>{title}</h3>
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
