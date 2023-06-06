import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://644b9af24bdbc0cc3a95949b.mockapi.io/',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => 'todos',
		}),
	}),
})

export const { useGetTodosQuery } = todosApi
