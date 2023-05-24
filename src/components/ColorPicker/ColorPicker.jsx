import React, { Component, useEffect, useRef, useState } from 'react'
import {
	StyledBackgroundTheme,
	StyledColorPalette,
	StyledColor,
	StyledColorsList,
} from './ColorPicker.styled'

export const ColorPicker = ({ colorsData }) => {
	const [colors] = useState(colorsData)
	const [currentColor, setCurrentColor] = useState('white')
	const isFirstRender = useRef(true)
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
