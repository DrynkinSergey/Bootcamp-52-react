import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	tagTypes: ['todos'],
	reducerPath: 'todosApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://644b9af24bdbc0cc3a95949b.mockapi.io/',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => 'todos',
			providesTags: ['todos'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: `todos`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['todos'],
		}),
	}),
})

export const { useGetTodosQuery, useAddTodoMutation } = todosApi
