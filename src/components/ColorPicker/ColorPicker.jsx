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
import { useToggle } from '../../hooks/useToggle'
import { Modal } from '../Modal/Modal'

export const ColorPicker = () => {
	const { colors } = useContext(MyContext)

	const { isOpen, open, close } = useToggle()

	// const [isOpen, setIsOpen] = useState(false)

	// const open = () => {
	// 	setIsOpen(true)
	// }
	// const close = () => {
	// 	setIsOpen(false)
	// }

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
							onClick={() => {
								setCurrentColor(item.color)
								open()
							}}
							key={item.id}
						>
							{item.color}
						</StyledColor>
					))}
					{isOpen && (
						<Modal onClose={close}>
							<h1>{currentColor}</h1>
						</Modal>
					)}
				</StyledColorsList>
			</StyledColorPalette>
		</StyledBackgroundTheme>
	)
}
