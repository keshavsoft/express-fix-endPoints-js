const findInsertIndex = ({
    inContent,
    inPatterns = []
}) => {
    const lines = inContent.split("\n");

    let lineNumber = -1;

    lines.forEach((line, index) => {
        if (inPatterns.some(pattern => line.includes(pattern))) {
            lineNumber = index;
        };
    });

    return lineNumber === -1
        ? -1
        : lines
            .slice(0, lineNumber + 1)
            .join("\n")
            .length;
};

const findInsertIndex1 = ({
    inContent,
    inPattern
}) => {
    const lines = inContent.split("\n");

    let lineNumber = -1;

    lines.forEach((line, index) => {
        if (line.includes(inPattern)) {
            lineNumber = index;
        };
    });

    return lineNumber === -1
        ? 0
        : lines
            .slice(0, lineNumber + 1)
            .join("\n")
            .length;
};

export default findInsertIndex;