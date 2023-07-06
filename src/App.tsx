import React, { useState, useRef } from 'react'
import './App.css'
import { Context } from './Context'
import Form from './Components/Form/Form'
import MyButton from './Components/MyButton'
import Profile from './Components/Profile'
// import Echarts from './Components/Echarts'
import Antd from './Components/Antd'

// interface 可以扩充
type TitleProps = {
	name: string
}

const Title: React.FC<TitleProps> = ({ name }) => {
	return <div>{name}</div>
}

const App: React.FC = () => {
	const [num, setNum] = useState(0)
	const [count, setCount] = useState(0)
	const [person1, setPerson1] = useState(1)
	const [person2, setPerson2] = useState(2)
	const inputRef = useRef(null)

	const onChange = (val: any) => {
		console.log('inputRef', val.target.value)
	}

	const btnHandle = () => {
		setPerson1(person1 + 1)
		setPerson1(person1 + 2)
	}

	const handleButton = () => {
		setNum(num + 1)
	}

	return (
		<div style={{ margin: 500 }}>
			<Title name='Zhang San' />
			<h2>you click {person1} time</h2>
			<button onClick={btnHandle}> increment </button>

			<input ref={inputRef} type='text' onChange={onChange} />
			<Context />
			<Form />
			<MyButton num={num} onClick={handleButton} />
			<MyButton num={num} onClick={handleButton} />
			<MyButton num={num} onClick={handleButton} />
			<Profile />
			{/* <Echarts /> */}
			<Antd />
		</div>
	)
}
export default App
