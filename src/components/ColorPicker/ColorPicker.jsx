import React, { Component, useState } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export const ColorPicker = ({ colorsData }) => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')
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
