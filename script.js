function sum(a, b) {
    return a + b;
}

function parse(rawText) {
    const data = []
    const lines = rawText.split("\n");

    for (var i = 1; i < lines.length; i++) {
        const elements = lines[i].split(',')
        data.push({
            latitude: elements[0],
            longitude: elements[1],
            altitude: elements[2]
        })
    }
    return data
}
module.exports = parse;