import React, { Component, PureComponent } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export class ColorPicker extends Component {
	//Встановлення пропсіп за замовчуванням
	static defaultProps = {
		colors: [],
	}
	// Обьявлення стейту
	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}
	componentDidUpdate() {
		console.log('Component change color and update')
	}
	shouldComponentUpdate(_, nextState) {
		return nextState.currentColor !== this.state.currentColor
	}
	// sum (a,b)
	render() {
		// Деструктуризація стейту
		const { colors, currentColor } = this.state
		return (
			<StyledBackgroundTheme bgColor={currentColor}>
				<StyledColorPalette>
					<StyledColorsList>
						{colors.map((item, index) => (
							<StyledColor
								onClick={() => this.setState({ currentColor: item.color })}
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
}

// export const ColorPicker = ({ colors }) => {
// return (
// 	<StyledBackgroundTheme>
// 		<StyledColorPalette>
// 			<StyledColorsList>
// 				{colors.map((item, index) => (
// 					<StyledColor key={item.id}>{item.color}</StyledColor>
// 				))}
// 			</StyledColorsList>
// 		</StyledColorPalette>
// 	</StyledBackgroundTheme>
// )
// }
