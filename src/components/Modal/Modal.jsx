import React, { Component } from 'react'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.stylede'

class Modal extends Component {
	render() {
		const { onClose, children, title } = this.props
		return (
			<ModalWrapper onClick={this.onBackdropClick}>
				<ModalContent>
					{title && <h1>{title}</h1>}
					<CloseButton onClick={onClose}>×</CloseButton>
					{children}
				</ModalContent>
			</ModalWrapper>
		)
	}
}

export default Modal
