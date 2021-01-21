function celciusToFahrenet(temp) {
    const converted = parseInt(temp) * 9/5 + 32
    return Math.floor(converted)
}

export default celciusToFahrenet