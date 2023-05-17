import React from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export class ColorPicker extends React.Component {
	//Встановлення пропсіп за замовчуванням
	static defaultProps = {
		colors: [],
	}
	// Обьявлення стейту
	state = {
		colors: this.props.colors,
		currentColor: 'white',
	}

	handleItemClick = color => {
		this.setState({ currentColor: color })
	}

	render() {
		// Деструктуризація стейту
		const { colors, currentColor } = this.state
		const { mustChange } = this.props
		return (
			<StyledBackgroundTheme mustChange={mustChange} bgColor={currentColor}>
				<StyledColorPalette>
					<StyledColorsList>
						{colors.map((item, index) => (
							<StyledColor
								onClick={() => this.handleItemClick(item.color)}
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
