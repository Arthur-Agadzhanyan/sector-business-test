import React from 'react';
import styles from './text.module.scss'

export function Text({children,className=""}) {
    return (
        <p className={`${styles.text} ${className}`}>{children}</p>
    );
}