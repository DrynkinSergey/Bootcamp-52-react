import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.stylede'

class Modal extends Component {
	getTime = () => {
		console.log(new Date().toLocaleTimeString())
	}
	intervalID = null
	timeoutID = null

	handleKeyDown = e => {
		console.log(e)
		if (e.key === 'Escape') {
			this.props.onClose()
		}
	}

	componentDidMount() {
		console.log('modal was render')
		document.addEventListener('keydown', this.handleKeyDown)
		// this.timeoutID = setTimeout(() => {
		// 	console.log('setTimout is done!')
		// }, 3000)
		// this.intervalID = setInterval(this.getTime, 1000)
	}
	componentWillUnmount() {
		console.log('modal was unmount')
		document.removeEventListener('keydown', this.handleKeyDown)
		clearInterval(this.intervalID)
		clearTimeout(this.timeoutID)
	}

	render() {
		const { onClose, children, title } = this.props
		return (
			<ModalWrapper>
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
			</ModalWrapper>
		)
	}
}

export default Modal
