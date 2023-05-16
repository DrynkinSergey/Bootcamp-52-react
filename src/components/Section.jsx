import { MyButton } from './MyButton'

export const Section = ({ title = 'Base section', text, btnName }) => {
	// const { title, text } = props
	// console.log(title)
	return (
		<section>
			<p>{title}</p>
			<p>{text}</p>
			<MyButton btnName={btnName} />
		</section>
	)
}
