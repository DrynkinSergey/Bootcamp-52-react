import React, { Component, useEffect, useRef } from 'react'
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
		// this.intervalID = setInterval(this.getTime, 1000)
		//
		//ОЧИСТКА НАШИХ ОБРОБНИКІВ
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
	// intervalID = null
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
// export class Modal extends Component {
// getTime = () => {
// 	console.log(new Date().toLocaleTimeString())
// }
// intervalID = null
// onBackdropClick = e => {
// 	if (e.target === e.currentTarget) {
// 		this.props.onClose()
// 	}
// }

// handleKeyDown = e => {
// 	console.log(e)
// 	if (e.key === 'Escape') {
// 		this.props.onClose()
// 	}
// }

// 	componentDidMount() {
// console.log('modal was render')
// document.addEventListener('keydown', this.handleKeyDown)
// this.intervalID = setInterval(this.getTime, 1000)
// 	}
// 	componentWillUnmount() {
// 		console.log('modal was unmount')
// 		document.removeEventListener('keydown', this.handleKeyDown)
// 		clearInterval(this.intervalID)
// 	}

// 	render() {
// 		const { onClose, children, title } = this.props
// return ReactDOM.createPortal(
// 	<ModalWrapper onClick={this.onBackdropClick}>
// 		<ModalContent>
// 			{title && (
// 				<>
// 					<h1>{title}</h1>
// 					<hr />
// 				</>
// 			)}
// 			<CloseButton onClick={onClose}>×</CloseButton>
// 			{children}
// 		</ModalContent>
// 	</ModalWrapper>,
// 	modalDiv
// )
// 	}
// }
