import { Buttons } from './Buttons'
import { Logo } from './Logo'

export const Header = props => {
	console.log(props)
	return (
		<header>
			<Logo />
			<h1>{props.headerTitle}</h1>
			<Buttons />
		</header>
	)
}
