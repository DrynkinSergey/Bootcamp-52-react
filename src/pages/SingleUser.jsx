import { Link, Outlet, useParams } from 'react-router-dom'
import { useFetchData } from '../Hooks/useFetchData'

export const SingleUser = () => {
	const { id } = useParams()
	const user = useFetchData(`https://jsonplaceholder.typicode.com/users/${id}`)
	const { name, email, phone, address } = user
	return (
		<div>
			SingleUser #{id}
			<div>
				<h1>{name}</h1>
				<h2>{email}</h2>
				<h2>{phone}</h2>
				<h2>City:</h2>
				<h3>{address?.city}</h3>
				<h3>{address?.street}</h3>
				<h3>{address?.suite}</h3>
			</div>
			<Link to='posts'>See user posts</Link>
			<Outlet />
		</div>
	)
}
//  {
// 	id: 1,
// 	name: 'Leanne Graham',
// 	username: 'Bret',
// 	email: 'Sincere@april.biz',
// 	address: {
// 		street: 'Kulas Light',
// 		suite: 'Apt. 556',
// 		city: 'Gwenborough',
// 		zipcode: '92998-3874',
// 		geo: {
// 			lat: '-37.3159',
// 			lng: '81.1496',
// 		},
// 	},
// 	phone: '1-770-736-8031 x56442',
// 	website: 'hildegard.org',
// 	company: {
// 		name: 'Romaguera-Crona',
// 		catchPhrase: 'Multi-layered client-server neural-net',
// 		bs: 'harness real-time e-markets',
// 	},
// }
