const SinglePosts = ({ id, title, author, created }) => {
	return (
		<li>
			<h1>Text:{title}</h1>
			<h5>Author:{author}</h5>
			<span>CreatedAt: {created}</span>
		</li>
	)
}

export default SinglePosts
