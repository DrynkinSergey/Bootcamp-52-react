import { Flex } from './Global.styled'
import { ColorPicker } from './components/ColorPicker/ColorPicker'
import colorsData from './assets/colors.json'
import { Counter } from './components/Counter/Counter'
import React from 'react'
class App extends React.Component {
	state = {
		mustChange: false,
	}
	handleChangeColor = () => {
		this.setState({ mustChange: true })
	}
	render() {
		return (
			<Flex h='100vh' justify='center' items='center' direction='column'>
				<ColorPicker mustChange={this.state.mustChange} colors={colorsData} />
				<Counter handleChangeColor={this.handleChangeColor} />
			</Flex>
		)
	}
}
// function App() {
// 	return (
// 		<Flex h='100vh' justify='center' items='center' direction='column'>
// 			<ColorPicker colors={colorsData} />
// 			<Counter />
// 		</Flex>
// 	)
// }

export default App
