import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomeHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h2>Assalamu Alaikum Wa Rahmatullah</h2>
                <p>Hello folks! I'm Mahmud Abdur Rahman from Bangladesh, a self-motivated software engineer specialized in
                    Python, Javascript, PHP & DevOps etc.</p>
            </div>
            <div className={styles.waves}></div>
        </section>
    );
}
