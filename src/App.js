import { Header } from './components/Header'
import { Section } from './components/Section'

function App() {
	const titleMovies = 'Movies section'
	const array = [].filter(item => item.id !== 1)
	if (1) {
		console.log()
	}

	return (
		//Це фрагмент в якості батьківського діва
		<>
			<Header />
			<hr />
			<main>
				<Section title={titleMovies} text='Movies conent' />
				<Section title='Content' text='Another conent' />
			</main>
		</>
	)
}

export default App
