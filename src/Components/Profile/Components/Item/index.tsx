import React from 'react'

export default function Item({ isPacked, name }) {
	return (
		<div>
			<li>
				{name} {isPacked ? '√' : '✕'}{' '}
			</li>
		</div>
	)
}
