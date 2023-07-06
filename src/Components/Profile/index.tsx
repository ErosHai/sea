import React, { useState } from 'react'
import Item from './Components/Item'

export default function Profile() {
	const [flag, setFlag] = useState(true)

	return (
		<div>
			<Item isPacked={flag} name='T-shirt' />
			<Item isPacked={!flag} name='jeans' />
			<Item isPacked={flag} name='books' />
		</div>
	)
}
