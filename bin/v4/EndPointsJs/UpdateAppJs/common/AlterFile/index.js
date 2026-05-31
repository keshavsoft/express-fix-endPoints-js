import readFile from "../readFile.js";
import checkDuplicate from "./checkDuplicate.js";
import findInsertIndex from "./findInsertIndex.js";
import writeFile from "../writeFile.js";
import validateAppJsPath from "../../validations/validateAppJsPath.js";

const validateDuplicate = ({ content, jsFilePath, duplicationCheck }) => {
    return checkDuplicate({
        inContent: content,
        inFilePath: jsFilePath,
        inSearchText: duplicationCheck
    });
};

const locateInsertPoint = ({ content, importInsertAfter }) => {
    return findInsertIndex({
        inContent: content,
        inPatterns: importInsertAfter
    });
};

const buildUpdatedContent = ({
    content,
    index,
    importLine
}) => {
    const before = content.slice(0, index);

    return before +
        "\n" +
        importLine +
        content.slice(index);
};

const alterFile = ({
    jsFilePath,
    importLine,
    duplicationCheck,
    importInsertAfter = [],
    showLog = false
}) => {
    const content = readFile(jsFilePath);

    const duplicateInfo = validateDuplicate(...);

    const index = locateInsertPoint(...);

    const updated = buildUpdatedContent(...);

    writeFile(jsFilePath, updated);
};

export default alterFile;