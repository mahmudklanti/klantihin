import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomeHero from "@site/src/components/HomeHero";
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">মূলত শিক্ষাকে সহজ করে বুঝানোর জন্য তৈরী করা হয়েছে।  বাংলাদেশে শিক্ষা ব্যবসা এতো মাত্রায় বিকৃতি লাভ করেছে যে, শিক্ষা এদেশে ব্যাবসা এবং ধান্দাবাজির একটা শাখাতে রূপান্তরিত হয়েছে।  তাছাড়া আমার ১২ বছরের ছাত্র- ছাত্রী পড়ানোর অভিজ্ঞতায় দেখেছি যে , পদার্থ বিজ্ঞান , গণিত এবং রসায়নে  শিক্ষার্থীরা বেসিক নিয়ে বেশ সমস্যায় থাকে যা তাদের মাঝে হতাশা তৈরি করে থাকে এবং এর ফলে ধীরে ধীরে এইসব বিজ্ঞানের বিষয়গুলা থেকে তাদের আগ্রহ হারিয়ে যায়।
              ঠিক এই চিন্তা থেকেই শিক্ষার্থীদের বেসিক নিয়ে কিছু একটা করার ইচ্ছা থেকেই Basic_AiD+  এর এর যাত্রাশুরু করেছি।
              সবাই যদি পাশে থাকেন তাহলে ইন্শাল্লাহ  ভালো কিছু দিতে পারবো আপনাদেরকে।</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              লেকচারসমূহ - ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="বেসিক এইড প্লাস,  মূলত শিক্ষাকে সহজ করে বুঝানোর জন্য তৈরী করা হয়েছে।">
      <HomepageHeader />
        <HomeHero />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
