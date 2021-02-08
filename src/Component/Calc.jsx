function add(num1, num2){
    return num1 + num2
}

function sub(num1, num2){
    return num1 > num2 ? num1 - num2 : num2 - num1
}

function mul(num1, num2){
    return num1 * num2
}

function div(num1, num2){
    return (num2 / num1).toFixed(3)
}

export default add
export {sub, mul, div}