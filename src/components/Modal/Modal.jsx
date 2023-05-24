import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.stylede'

const modalDiv = document.querySelector('#modal')
export const Modal = props => {
	const { title, children, onClose } = props

	const intervalID = useRef(null)

	useEffect(() => {
		console.log('modal was render')
		intervalID.current = setInterval(getTime, 1000)

		document.addEventListener('keydown', handleKeyDown)

		return () => {
			console.log('modal was unmount')
			clearInterval(intervalID.current)
			document.removeEventListener('keydown', handleKeyDown)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const getTime = () => {
		console.log(new Date().toLocaleTimeString())
	}
	const onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	const handleKeyDown = e => {
		console.log(e)
		if (e.key === 'Escape') {
			onClose()
		}
	}

	return ReactDOM.createPortal(
		<ModalWrapper onClick={onBackdropClick}>
			<ModalContent>
				{title && (
					<>
						<h1>{title}</h1>
						<hr />
					</>
				)}
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalDiv
	)
}
