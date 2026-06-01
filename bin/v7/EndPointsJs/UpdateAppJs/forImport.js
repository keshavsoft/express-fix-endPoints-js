// v2/AppJs/index.js

import fs from "fs";

import updateImports from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";

const repalceLines = ({ inCheckLines, inEndpoint }) => {
    return {
        importLine: inCheckLines.toInsertLine.replaceAll("${endpoint}", inEndpoint).replaceAll("'", '"'),
        duplicationCheck: inCheckLines.duplicationCheck.replaceAll("${endpoint}", inEndpoint).replaceAll("'", '"'),
        importInsertAfter: inCheckLines.insertAfter.map(element => {
            return element.replaceAll("'", '"')
        })
    };
};

const startFunc = ({ appJsPath, endpoint, inCheckLines, showLog = false }) => {
    validateEndpoint({ endpoint });

    const fromImports = updateImports({
        jsFilePath: appJsPath,
        ...buildLinesForImport({
            inEndpoint: endpoint,
            inCheckLines
        }),
        showLog
    });

    return fromImports;
};

export default startFunc;