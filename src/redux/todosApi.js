import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todosApi = createApi({
	tagTypes: ['tasks'],
	reducerPath: 'todosApi',
	// Додається для рефетчу при фокусі
	refetchOnFocus: true,
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://goit-task-manager.herokuapp.com/',
		prepareHeaders: (headers, { getState, endpoint }) => {
			const user = getState().auth

			if (user && endpoint !== 'refresh') {
				headers.set('Authorization', `Bearer ${user.token}`)
			}
			return headers
		},
		// credentials: 'include',
	}),
	endpoints: builder => ({
		getTodos: builder.query({
			query: () => 'tasks',
			providesTags: ['tasks'],
		}),
		addTodo: builder.mutation({
			query: body => ({
				url: `tasks`,
				method: 'POST',
				body,
			}),
			invalidatesTags: ['tasks'],
		}),
		deleteTodo: builder.mutation({
			query: id => ({
				url: `tasks/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['tasks'],
		}),
		toggleTodo: builder.mutation({
			query: body => ({
				url: `tasks/${body.id}`,
				method: 'PUT',
				body: { completed: body.completed },
			}),
			invalidatesTags: ['tasks'],
		}),
	}),
})

export const {
	useGetTodosQuery,
	useAddTodoMutation,
	useDeleteTodoMutation,
	useToggleTodoMutation,
} = todosApi
