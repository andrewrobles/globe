function sum(a, b) {
    return a + b;
}

function parse(rawText) {
    const data = []
    const lines = rawText.split("\n");

    for (var i = 1; i < lines.length; i++) {
        const elements = lines[i].split(',')
        data.push({
            latitude: parseInt(elements[0].trim()),
            longitude: parseInt(elements[1].trim()),
            altitude: parseInt(elements[2].trim())
        })
    }
    return data
}
module.exports = parse;