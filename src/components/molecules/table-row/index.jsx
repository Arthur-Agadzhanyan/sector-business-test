import React from 'react';
import {TableColumn} from "@atoms/table-column";
import {Text} from '@atoms/text'

import styles from './table-row.module.scss'

export function TableRow({postInfo:{id,title,body}}) {
    return (
        <div className={styles.row}>
            <TableColumn className="col_id">
                <Text>{id}</Text>
            </TableColumn>

            <TableColumn className="col_title">
                <Text>{title}</Text>
            </TableColumn>

            <TableColumn className="col_body">
                <Text>{body}</Text>
            </TableColumn>
        </div>
    );
}