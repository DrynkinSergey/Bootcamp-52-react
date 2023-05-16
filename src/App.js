import { Header } from './components/Header'
import { MyButton } from './components/MyButton'
import { Section } from './components/Section'
import { UserCard } from './components/UserCard'
import userData from './assets/user.json'
import { User } from './components/User'
function App({ user }) {
	console.log(userData)
	return (
		<div style={{ display: 'flex', gap: '40px' }}>
			{userData.map(user => (
				<User
					key={user.id}
					avatar={user.avatar}
					location={user.location}
					username={user.username}
					tag={user.tag}
					stats={user.stats}
				/>
			))}
			{/* <User
				avatar={userData[1].avatar}
				location={userData[1].location}
				username={userData[1].username}
				tag={userData[1].tag}
				stats={userData[1].stats}
			/>
			<User
				avatar={userData[2].avatar}
				location={userData[2].location}
				username={userData[2].username}
				tag={userData[2].tag}
				stats={userData[2].stats}
			/> */}
		</div>
	)
	// return (
	// 	<>
	// 		<Section title='Movies'>
	// 			<ul>
	// 				<li>Friends</li>
	// 				<li>Sherlock</li>
	// 			</ul>
	// 		</Section>

	// 		<Section title='Goods'>
	// 			<MyButton title='button in children' />
	// 			<ul>
	// 				<li>Cabbage</li>
	// 				<li>Carrots</li>
	// 			</ul>
	// 			dsafasdfsad
	// 			<a href='/'>Go to market</a>
	// 		</Section>

	// 		<Section title='React'>
	// 			<img
	// 				src='https://knackforge.com/wp-content/uploads/2022/11/Benefits-of-ReactJS.jpg'
	// 				alt=''
	// 			/>
	// 		</Section>
	// 	</>
	// )
}

export default App
// "username": "Jacques Gluke",
// 	"tag": "jgluke",
// 	"location": "Ocho Rios, Jamaica",
// 	"avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
// 	"stats": {
// 		"followers": 5603,
// 		"views": 4827,
// 		"likes": 1308
// 	}
