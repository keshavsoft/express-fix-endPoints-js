const startFunc = ({
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

export default startFunc;