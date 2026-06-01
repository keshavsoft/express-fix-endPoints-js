// v2/AppJs/index.js

import fs from "fs";

import alterFile from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";
import useJson from "./forUse.json" with {type: "json"};

const buildLinesForImport = (endpoint) => {
    return {
        importLine: useJson.importLine.replaceAll("${endpoint}", endpoint).replaceAll("'", '"'),
        duplicationCheck: useJson.duplicationCheck.replaceAll("${endpoint}", endpoint).replaceAll("'", '"'),
        importInsertAfter: useJson.insertAfter.map(element => {
            return element.replaceAll("'", '"')
        })
    };
};

const startFunc = ({ appJsPath, endpoint, inCheckLines,
    showLog = false }) => {

    validateEndpoint({ endpoint });

    const fromImports = alterFile({
        jsFilePath: appJsPath,
        ...buildLinesForImport(endpoint),
        showLog
    });

    return fromImports;
};

export default startFunc;