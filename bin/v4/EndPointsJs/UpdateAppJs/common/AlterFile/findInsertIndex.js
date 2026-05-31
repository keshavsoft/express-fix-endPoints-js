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

export default findInsertIndex;