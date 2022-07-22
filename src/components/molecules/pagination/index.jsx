import React, {memo} from 'react';
import {Link} from "react-router-dom"
import styles from './pagination.module.scss'

function Pagination({total,currentPage}) {
    const totalPages = +total / 10

    const renderLinks = ()=>{
        const links = []
        console.log(currentPage)

        for (let i = 0; i < totalPages; i++) {
            links.push(i+1)
        }

        return links.map((count)=>(
            <Link key={count} to={`/pages/${count}`} className={`${styles.pagination__item} ${+currentPage === count ? styles["pagination__item-active"] : ""}`}>{count}</Link>
        ))
    }

    return (
        <div className={styles.bottom_panel}>
            <Link to={`/pages/${+currentPage-1}`} className={`${styles.panel__nav} ${+currentPage === 1 ? styles.hidden : ""}`}>Назад</Link>

            <div className={styles.pagination}>
                {renderLinks()}
            </div>

            <Link to={`/pages/${+currentPage+1}`} className={`${styles.panel__nav} ${+currentPage === 10 ? styles.hidden : ""}`}>Далее</Link>
        </div>
    );
}

export default memo(Pagination)