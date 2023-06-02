import Counter from './components/Counter/Counter'
import TodoList from './components/TodoList/TodoList'

function App() {
	// const a = [1, 2, 3]
	// console.log('a =>>>>', a)
	// a.push(4)
	// console.log(a)

	// const b = a
	// console.log('b =>>>>', b)
	// b.push(4)
	// console.log('b.push =>>>>', b)
	// console.log('a =>>>>', a)
	// const newB = [...b, 4]
	// console.log(newB)
	// console.log(b)
	// const a = [{ name: 'alex' }, { name: 'sergey' }]

	// const el = a.find(item => item.name === 'alex')
	// el.name = 'Olena'
	// console.log(a)

	return (
		<div>
			<TodoList />
			<Counter />
		</div>
	)
}

export default App
