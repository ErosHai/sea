import React from 'react'
import Toolbar from './Components/Context/ToolBar'

const themes = {
	light: {
		foreground: '#000000',
		background: '#eeeeee',
	},
	dark: {
		foreground: '#ffffff',
		background: '#222222',
	},
}

export const ThemeContext = React.createContext(themes.dark)

export function Context() {
	return (
		<ThemeContext.Provider value={themes.dark}>
			<Toolbar />
		</ThemeContext.Provider>
	)
}
