import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
    reducerPath: 'todosApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => ({
                url: `todos`,
                method: 'GET'
            })
        }),
        updateTodos: builder.mutation({
            query: (updateTodosData) => {
                const {id, ...data} = updateTodosData;
                return {
                    url: `todos/${id}`,
                    method: 'PUT',
                    body: data,
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                }
            }
        }),
    }),
})

export const { useGetTodosQuery, useUpdateTodosMutation } = todosApi;