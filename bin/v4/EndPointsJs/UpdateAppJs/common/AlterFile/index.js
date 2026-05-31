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

const buildUpdatedContent1 = ({
    content,
    insertInfo,
    importLine
}) => {
    const before = content.slice(0, insertInfo.index);

    const separator =
        insertInfo.matchedPattern === "const router = "
            ? "\n"
            : "";

    const suffix =
        insertInfo.matchedPattern === "const router = "
            ? "\n"
            : "";

    return before +
        separator +
        importLine +
        suffix +
        content.slice(insertInfo.index);
};

const buildUpdatedContent = ({
    content,
    insertInfo,
    importLine
}) => {
    const before = content.slice(0, insertInfo.index);

    const separator =
        insertInfo.matchedPattern === "const router = "
            ? "\n"
            : "";

    const suffix =
        insertInfo.matchedPattern === "const router = "
            ? "\n"
            : "";

    const isFirstInsert =
        insertInfo.matchedPattern === "const router = ";

    return before +
        (isFirstInsert ? "\n\n" : "\n") +
        importLine +
        (isFirstInsert ? "\n" : "") +
        content.slice(insertInfo.index);
};

const alterFile = ({
    jsFilePath,
    importLine,
    duplicationCheck,
    importInsertAfter = [],
    showLog = false
}) => {
    const content = readFile(jsFilePath);

    const duplicateInfo = validateDuplicate({ content, jsFilePath, duplicationCheck });

    // const index = locateInsertPoint({ content, importInsertAfter });
    const insertInfo = locateInsertPoint({
        content,
        importInsertAfter
    });

    const updated = buildUpdatedContent({
        content,
        insertInfo,
        importLine
    });

    writeFile(jsFilePath, updated);
};

export default alterFile;