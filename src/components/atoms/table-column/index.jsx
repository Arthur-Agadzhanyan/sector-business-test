import React from 'react';

import styles from './table-column.module.scss'

export function TableColumn({children,className}) {
    return (
        <div className={`${styles.column} ${className}`}>
            {children}
        </div>
    );
}