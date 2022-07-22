import {configureStore} from "@reduxjs/toolkit";
import {postsApi} from "./posts/posts.api";

export const store = configureStore({
    reducer:{
        [postsApi.reducerPath]: postsApi.reducer
    }
})