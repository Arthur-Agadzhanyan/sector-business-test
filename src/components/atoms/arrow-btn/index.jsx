import React from 'react';
import styles from './arrow-btn.module.scss'

const noop = ()=>{}

export function ArrowBtn({className='',active,onClick=noop}) {
    return (
        <button className={`${styles.arrow_btn} ${active ? styles[`arrow_btn-active`] : ""} ${className}`} onClick={onClick}>
            <img src={process.env.PUBLIC_URL + '/img/arrow.svg'} alt=""/>
        </button>
    );
}