// v2/AppJs/index.js

import checkLines from "./checkLines.json" with {type: "json"};
import validateEndpoint from "./validations/validateEndpoint.js";
import alterFile from "./common/AlterFile/index.js";

const updateAppJs = ({ inEndPointsJsPath, actionName, inCheckLines,
    showLog = false }) => {

    validateEndpoint({ endpoint: actionName });

    const localCheckLines = inCheckLines || checkLines;

    alterFile({
        jsFilePath: inEndPointsJsPath,
        importLine: localCheckLines.importLines.importLine,
        duplicationCheck: localCheckLines.importLines.duplicationCheck,
        importInsertAfter: localCheckLines.importLines.importInsertAfter,
        showLog
    });

    alterFile({
        jsFilePath: inEndPointsJsPath,
        importLine: localCheckLines.useLines.importLine,
        duplicationCheck: localCheckLines.useLines.duplicationCheck,
        importInsertAfter: localCheckLines.useLines.importInsertAfter,
        showLog
    });

    return false;
};

export default updateAppJs;