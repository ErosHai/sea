/**
 * 让异步操作（promise 或者 async）等待一段时间
 *
 * (async () => {
 *   console.log('hi')
 *   await wait(2000) // 等待两秒
 *   console.log('xiaoming')
 * })()
 * @param time
 */
const wait = time => {
	const wait = time => {
		setTimeout(() => {
			const p = new Promise((resolve, reject) => {
				resolve('xiaoming')
			})

			p.then(res => {
				console.log(res)
			})
		}, time)
	}
}

/**
 * 用数组的 filter, map, reduce 方法对以下数据做处理，使得输出结果为 '256'
 * const ary = [{a: 6}, {a: 1}, {a: 5}, {a: 2}];
 *
 * @param ary
 */
const filter = ary => {
	let foo = []
	let sort
	let result

	const arr = ary
		.filter(item => item.a > 1)
		.map(item => {
			foo.push(item.a)
			sort = foo.sort()
			result = sort.join('')
			return result
		})
	console.log(result, 'result')
}

/**
 * 对以下数据做处理，使得输出结果为 ['a', 'b', 'c']
 * const ary = ['a', 'b', 'c', 'a', 'b', 'c', 'a', 'b', 'c']
 *
 * @param ary
 */
const dist = ary => {
	const result = Array.form(new Set(ary))
	console.log(result)
}

/**
 * 实现go函数，使得函数执行能输出如下结果规则
 *
 *
 * @param ary
 */
_.go(['a', 'b', 'c', 'd'], 2)
// => [['a', 'b'], ['c', 'd']]

_.go(['a', 'b', 'c', 'd'], 3)
// => [['a', 'b', 'c'], ['d']]

_.go(['a', 'b', 'c', 'd'], 5)
// => [['a', 'b', 'c', 'd']]

_.go(['a', 'b', 'c', 'd'], 0)
// => []
