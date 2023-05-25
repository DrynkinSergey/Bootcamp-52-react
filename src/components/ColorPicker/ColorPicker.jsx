import React, {
	Component,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'
import { MyContext } from '../../App'

export const ColorPicker = () => {
	const { colors } = useContext(MyContext)

	const [currentColor, setCurrentColor] = useState('white')
	const isFirstRender = useRef(true)
	useEffect(() => {
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
