import { Header } from './modules/header/components/Header/Header'
import { TodoList } from './modules/todos/components/TodoList/TodoList'
import { Filter } from './modules/todos/components/Filter/Filter'
import { ContextProvider } from './HOC/ContextProvider'

export const App = () => {
	return (
		<>
			<ContextProvider>
				<Header />
				<TodoList />
				<Filter />
			</ContextProvider>
		</>
	)
}
