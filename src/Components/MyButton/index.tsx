import React from 'react'

export default function MyButton({ num, onClick }) {
	return (
		<>
			<button onClick={onClick}> Click {num} time</button>
			<br />
		</>
	)
}
