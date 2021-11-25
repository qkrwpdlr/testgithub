const numArr = []

for (let i = 0; i < 10; i++)numArr.push(i + 1)

const result = (() => {
    let temp = 0
    for (let i = 0; i < 10; i++) {
        temp += numArr[i]
    }
    return temp
})(numArr)