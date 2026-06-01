// v2/AppJs/index.js

import fs from "fs";

import updateImports from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";
import importJson from "./forImport.json" with {type: "json"};

const buildLinesForImport = (endpoint) => {
    return {
        importLine: importJson.importLine.replaceAll("${endpoint}", endpoint).replaceAll("'", '"'),
        duplicationCheck: importJson.duplicationCheck.replaceAll("${endpoint}", endpoint).replaceAll("'", '"'),
        importInsertAfter: importJson.insertAfter.replaceAll("'", '"')
    };
};

const buildLinesForImport1 = (endpoint) => {


    const importLine = `import funcFrom${endpoint} from "./${endpoint}/controller.js";`;
    const duplicationCheck = `from "./${endpoint}/controller.js"`;

    const importInsertAfter =
        [
            "import funcFrom",
            "import express"
        ];

    return { importLine, duplicationCheck, importInsertAfter };
};

const startFunc = ({ appJsPath, endpoint, showLog = false }) => {
    validateEndpoint({ endpoint });

    const fromImports = updateImports({
        jsFilePath: appJsPath,
        ...buildLinesForImport(endpoint),
        showLog
    });

    return fromImports;
};

export default startFunc;