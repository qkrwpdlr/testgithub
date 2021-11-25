const numArr = []

for (let i = 0; i < 10; i++)numArr.push(i + 1)

const result = numArr.reduce((cur, pre) => cur + pre, 0)

console.log(result)
