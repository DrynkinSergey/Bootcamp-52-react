import React from 'react'

const AddMessage = ({ sendPost }) => {
	const submit = e => {
		e.preventDefault()
		const post = e.target.post.value
		sendPost(post)
	}
	return (
		<form onSubmit={submit}>
			<input name='post' type='text' />
			<button>Send</button>
		</form>
	)
}

export default AddMessage
