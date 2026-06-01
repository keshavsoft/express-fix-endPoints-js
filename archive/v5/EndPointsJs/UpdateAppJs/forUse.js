// v2/AppJs/index.js

import fs from "fs";

import alterFile from "./common/AlterFile/index.js";
import validateEndpoint from "./validations/validateEndpoint.js";

const buildLinesForImport = (endpoint) => {
    const safeName = endpoint.replace(/[^a-zA-Z0-9]/g, "_");

    const importLine = `router.post("/${endpoint}", express.json(), (req, res) => funcFrom${endpoint}({ req, res, inTablePath: tablePath }));`;
    const duplicationCheck = `router.use("/${endpoint}"`;

    const importInsertAfter =
        [
            "router.",
            "const router = "
        ];

    return { importLine, duplicationCheck, importInsertAfter };
};

const startFunc = ({ appJsPath, endpoint, showLog = false }) => {
    validateEndpoint({ endpoint });

    const fromImports = alterFile({
        jsFilePath: appJsPath,
        ...buildLinesForImport(endpoint),
        showLog
    });

    return fromImports;
};

export default startFunc;