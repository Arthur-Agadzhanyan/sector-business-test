import React, {useCallback, useEffect, useState} from 'react';
import {useParams, useNavigate} from "react-router-dom";
//API
import {useGetPostsQuery} from "@store/posts/posts.api";
//COMPONENTS
import SearchInput from "@molecules/search-input";
import {Table} from "@organisms/table";
import Pagination from "@molecules/pagination";
//STYLES
import styles from './table-page.module.scss'
import {Loader} from "@atoms/loader";

export function TablePage(props) {
    const { pageNum } = useParams();
    const navigate = useNavigate()

    const {data, isLoading, isError} = useGetPostsQuery(pageNum)

    const [searchingWord, setSearchingWord] = useState()

    useEffect(()=>{
        if(isNaN(pageNum)){
            navigate("/pages/1")
        }
        else if(+pageNum < 1){
            navigate("/pages/1")
        }
    },[pageNum,navigate])

    const changeHandler = useCallback((value)=>{
        setSearchingWord(value)
    },[])

    if(isLoading){
        return <Loader/>
    }

    if(isError){
        return <h1>Ошибка</h1>
    }

    return (
        <main className={styles.table_page}>
            <div className="container">
                <SearchInput placeholder={"Поиск"} className={styles.search} searching={searchingWord} onSubmit={changeHandler}/>
                <Table posts={data.posts} searchingWord={searchingWord}/>
                <Pagination total={data.totalCount} currentPage={pageNum}/>
            </div>
        </main>
    );
}