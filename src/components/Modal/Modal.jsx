import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.stylede'

const modalDiv = document.querySelector('#modal')
class Modal extends Component {
	getTime = () => {
		console.log(new Date().toLocaleTimeString())
	}
	intervalID = null
	timeoutID = null

	onBackdropClick = e => {
		// console.log(e.target === e.currentTarget)

		if (e.target === e.currentTarget) {
			this.props.onClose()
		}
	}

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
		this.intervalID = setInterval(this.getTime, 1000)
	}
	componentWillUnmount() {
		console.log('modal was unmount')
		document.removeEventListener('keydown', this.handleKeyDown)
		clearInterval(this.intervalID)
		clearTimeout(this.timeoutID)
	}

	render() {
		const { onClose, children, title } = this.props
		return ReactDOM.createPortal(
			<ModalWrapper onClick={this.onBackdropClick}>
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
}

export default Modal
