import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomeHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h2>আসসালামু আলাইকুম</h2>
                <p>বেসিক এইড প্লাস,  মূলত শিক্ষাকে সহজ করে বুঝানোর জন্য তৈরী করা হয়েছে।  বাংলাদেশে শিক্ষা ব্যবসা এতো মাত্রায় বিকৃতি লাভ করেছে যে, শিক্ষা এদেশে ব্যাবসা এবং ধান্দাবাজির একটা শাখাতে রূপান্তরিত হয়েছে।  তাছাড়া আমার ১২ বছরের ছাত্র- ছাত্রী পড়ানোর অভিজ্ঞতায় দেখেছি যে , পদার্থ বিজ্ঞান , গণিত এবং রসায়নে  শিক্ষার্থীরা বেসিক নিয়ে বেশ সমস্যায় থাকে যা তাদের মাঝে হতাশা তৈরি করে থাকে এবং এর ফলে ধীরে ধীরে এইসব বিজ্ঞানের বিষয়গুলা থেকে তাদের আগ্রহ হারিয়ে যায়।
                    ঠিক এই চিন্তা থেকেই শিক্ষার্থীদের বেসিক নিয়ে কিছু একটা করার ইচ্ছা থেকেই Basic_AiD+  এর এর যাত্রাশুরু করেছি।
                    সবাই যদি পাশে থাকেন তাহলে ইন্শাল্লাহ  ভালো কিছু দিতে পারবো আপনাদেরকে। </p>
            </div>
            <div className={styles.waves}></div>
        </section>
    );
}
