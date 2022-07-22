import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
    reducerPath: "posts/api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: (build)=>({
        getPosts: build.query({
            query: (_page) => ({
                url: `posts`,
                params:{
                    _page
                }
            }),
            transformResponse(posts, meta) {
                return { posts, totalCount: Number(meta.response.headers.get('X-Total-Count')) }
            }
        })
    })
})

export const {useGetPostsQuery} = postsApi