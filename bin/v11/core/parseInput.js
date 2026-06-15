export default function parseInput({ jsFilePath,
    inCheckLines = {}, showLog, inStartEndPoint = "Api" }) {

    const [...args] = process.argv.slice(2);

    return {
        showLog: args[1] === undefined
            ? showLog
            : args[1] === "true",
        inJsFilePath: jsFilePath || process.cwd(),
        inCheckLines,
        inStartEndPoint
    };
};