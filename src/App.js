import { Header } from './components/Header'
import { MyButton } from './components/MyButton'
import { Section } from './components/Section'
import { UserCard } from './components/UserCard'

function App({ user }) {
	const titleMovies = 'Movies section'

	return (
		<>
			{/* <Header headerTitle='Hello' /> */}
			<hr />
			<MyButton title='login' />
			<MyButton title='logout' />

			<UserCard user={user} />

			<Section btnName='login' title={titleMovies} text='Movies conent' />
			<hr />
			<Section text='Another conent' />
		</>
	)
}

export default App
