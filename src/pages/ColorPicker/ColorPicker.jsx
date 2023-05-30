import React, { Component, useEffect, useRef, useState } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

const colorsData = [
	{
		id: 1,
		color: 'white',
	},
	{
		id: 2,
		color: 'lightblue',
	},
	{
		id: 3,
		color: 'orange',
	},
	{
		id: 4,
		color: 'tomato',
	},
	{
		id: 5,
		color: 'teal',
	},
	{
		id: 6,
		color: 'yellow',
	},
	{
		id: 7,
		color: 'indigo',
	},
	{
		id: 8,
		color: 'green',
	},
]

export const ColorPicker = () => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')
	const isFirstRender = useRef(true)
	// let firstRender = true
	useEffect(() => {
		debugger
		if (isFirstRender.current) {
			isFirstRender.current = false
			console.log('First render')
			return
		}
		console.log('Not first render')
	})

	return (
		<StyledBackgroundTheme bgColor={currentColor}>
			<StyledColorPalette>
				<StyledColorsList>
					{colors.map((item, index) => (
						<StyledColor
							// onClick={() => this.setState({ currentColor: item.color })}
							onClick={() => setCurrentColor(item.color)}
							key={item.id}
						>
							{item.color}
						</StyledColor>
					))}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}

// export class ColorPicker extends Component {
// 	static defaultProps = {
// 		colors: [],
// 	}
// 	state = {
// 		colors: this.props.colors,
// 		currentColor: 'white',
// 	}
// 	componentDidUpdate() {
// 		console.log('Component change color and update')
// 	}
// 	shouldComponentUpdate(_, nextState) {
// 		return nextState.currentColor !== this.state.currentColor
// 	}
// 	render() {
// 		const { colors, currentColor } = this.state
// return (
// 	<StyledBackgroundTheme bgColor={currentColor}>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colors.map((item, index) => (
// 					<StyledColor
// 						onClick={() => this.setState({ currentColor: item.color })}
// 						key={item.id}
// 					>
// 						{item.color}
// 					</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// 	}
// }
