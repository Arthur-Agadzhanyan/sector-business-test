import React, {useEffect, useState} from 'react';
//ATOMS
import {TableColumn} from "@atoms/table-column";
import {ArrowBtn} from "@atoms/arrow-btn";
//MOLECULES
import {TableRow} from "@molecules/table-row";

import styles from "./table.module.scss"

const defaultSort = {id:false, title:false, body:false}

export function Table({posts,searchingWord=""}) {
    const [postsState, setPostsState] = useState(posts)
    const [sorting, setSorting] = useState(defaultSort)

    useEffect(()=>{
        if(posts.length){
            const filtered = posts.filter((el)=>{
                return searchBy(el.id,searchingWord) || searchBy(el.title,searchingWord) || searchBy(el.body,searchingWord)
            })
            setPostsState(filtered)
        }
    },[posts,searchingWord])

    const searchBy = (element,word)=>{
        return element.toString().toLowerCase().includes(word.toLowerCase());
    }

    const sortPosts = (sortParam)=>{
        const newArr = [...postsState]
        if(typeof newArr[0][sortParam]  === 'number'){
            if(sorting[sortParam]){
                newArr.sort((a,b)=> a[sortParam] - b[sortParam])
            }else{
                newArr.sort((a,b)=> b[sortParam] - a[sortParam])
            }
        }else{
            if(sorting[sortParam]){
                newArr.sort((a,b)=> {
                    if (a[sortParam] < b[sortParam]) return -1;
                    if (a[sortParam] > b[sortParam]) return 1;
                    return 0
                })
            }else{
                newArr.sort((a,b)=> {
                    if (a[sortParam] > b[sortParam]) return -1;
                    if (a[sortParam] < b[sortParam]) return 1;
                    return 0
                })
            }
        }
        setPostsState(newArr)
        setSorting(prev=> ({...defaultSort,[sortParam]: !prev[sortParam]}))
    }

    return (
        <div className={styles.table_wrapper}>
            <div className={styles.table}>
                <div className={styles.table__head}>
                    <TableColumn className={`${styles.head__column} col_id`}>
                        <span onClick={()=>sortPosts("id")}>ID</span>
                        <ArrowBtn className={styles.column__btn} active={sorting.id} onClick={()=>sortPosts("id")}/>
                    </TableColumn>

                    <TableColumn className={`${styles.head__column} col_title`}>
                        <span onClick={()=>sortPosts("title")}>Заголовок</span>
                        <ArrowBtn className={styles.column__btn} active={sorting.title} onClick={()=>sortPosts("title")}/>
                    </TableColumn>

                    <TableColumn className={`${styles.head__column} col_body`}>
                        <span onClick={()=>sortPosts("body")}>Описание</span>
                        <ArrowBtn className={styles.column__btn} active={sorting.body} onClick={()=>sortPosts("body")}/>
                    </TableColumn>
                </div>

                {postsState.map((post,i)=>(
                    <TableRow key={post.id} postInfo={post}/>
                ))}
            </div>
        </div>
    );
}