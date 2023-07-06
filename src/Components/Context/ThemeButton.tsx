import React, { useContext } from 'react'
import { ThemeContext } from '../../Context'

export default function ThemeButton() {
	const theme = useContext(ThemeContext)
	console.log(theme, 'theme')

	return (
		<button style={{ background: theme.background, color: theme.foreground }}>
			I am styled by theme context!
		</button>
	)
}
