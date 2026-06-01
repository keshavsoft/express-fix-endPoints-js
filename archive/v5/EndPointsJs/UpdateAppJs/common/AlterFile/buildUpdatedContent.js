const startFunc = ({
    content,
    insertInfo,
    importLine,
    importInsertAfter
}) => {
    const before = content.slice(0, insertInfo.index);
    console.log("insertInfo : ", insertInfo, importInsertAfter);

    const isFirstInsert =
        insertInfo.matchedPattern === importInsertAfter[importInsertAfter.length - 1];

    return before +
        (isFirstInsert ? "\n" : "") +
        importLine +
        "\n" +
        content.slice(insertInfo.index);
};

export default startFunc;