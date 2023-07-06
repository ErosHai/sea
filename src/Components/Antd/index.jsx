import React from 'react'
import { Button, Form, Input, Select, ConfigProvider } from 'antd'
import 'antd/dist/reset.css'

export default function Antd() {
	const [form] = Form.useForm()

	// 表单提交成功
	const onFinish = values => {
		const name = form.getFieldValue('username')
		const pwd = form.getFieldValue('password')
		const mem = form.getFieldValue('member')

		form.setFieldsValue({ username: 'lisi' })
		console.log(form.getFieldsValue(), mem)

		// 表单校验成功后
		form
			.validateFields()
			.then(value => {
				console.log('value=', value)
			})
			.catch(err => console.log(err))
	}

	const onFinishFailed = errorInfo => {
		console.log(errorInfo, 'errorInfo')
	}

	const handleChange = (value: string) => {
		console.log(`selected ${value}`)
	}

	return (
		<div>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#3a66c4',
					},
				}}
			>
				<Form
					name='basic'
					form={form}
					labelCol={{ span: 2 }}
					wrapperCol={{ span: 16 }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					autoComplete='off'
				>
					<Form.Item
						label='Username'
						name='username'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label='Password'
						name='password'
						rules={[{ required: true, message: 'Please input your username!' }]}
					>
						<Input.Password />
					</Form.Item>

					<Form.Item name='member'>
						<Select
							style={{ width: 120 }}
							onChange={handleChange}
							options={[
								{ value: 'jack', label: 'Jack' },
								{ value: 'lucy', label: 'Lucy' },
								{ value: 'Yiminghe', label: 'yiminghe' },
							]}
						/>
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 1, span: 8 }}>
						<Button
							type='primary'
							onClick={() => {
								form.submit()
							}}
						>
							Submit
						</Button>

						<Button
							type='primary'
							style={{ marginLeft: '20px' }}
							onClick={() => {
								form.resetFields()
							}}
						>
							Reset
						</Button>
					</Form.Item>
				</Form>
			</ConfigProvider>
		</div>
	)
}
