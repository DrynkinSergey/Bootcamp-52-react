import React from 'react'
import Modal from './components/Modal/Modal'
import { StyledButton } from './components/Counter/Counter.styled'
class App extends React.Component {
	state = {
		isOpen: false,
	}

	toggleModal = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }))
	}
	render() {
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: '100vh',
				}}
			>
				<StyledButton border='2px' onClick={this.toggleModal}>
					Open modal
				</StyledButton>
				{this.state.isOpen && (
					<Modal onClose={this.toggleModal} title='First modal'>
						<h2>Hello from modal</h2>
						<h3> modal</h3>
						<button>OK</button>
					</Modal>
				)}
			</div>
		)
	}
}

export default App
