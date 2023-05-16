import { MyButton } from './MyButton'

export const Section = ({ title = 'Base section', children }) => {
	console.log(children)
	return (
		<section>
			<p> {title} </p>
			<hr />
			{children}
		</section>
	)
}
