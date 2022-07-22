import React, {memo, useState} from 'react';
import styles from './search-input.module.scss'

function SearchInput({placeholder,onSubmit,className=""}) {
    const [searchValue, setSearchValue] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault()
        onSubmit(searchValue)
    }

    const changeHandler = (e)=>{
        setSearchValue(e.target.value)
    }

    return (
        <form className={`${styles.search_block} ${className}`} onSubmit={submitHandler}>
            <input type="text" className={styles.block__input} placeholder={placeholder} value={searchValue} onChange={changeHandler}/>
            <button type="submit" className={styles.block__btn}>
                <img src={process.env.PUBLIC_URL + '/img/search.svg'} alt=""/>
            </button>
        </form>
    );
}

export default memo(SearchInput)