// v2/AppJs/index.js

import checkLines from "./checkLines.json" with {type: "json"};
import validateEndpoint from "./validations/validateEndpoint.js";
import alterFile from "./common/AlterFile/index.js";

const repalceLines = ({ inCheckLines, inEndpoint }) => {
    return {
        importLine: inCheckLines.toInsertLine.replaceAll("${endpoint}", inEndpoint).replaceAll("'", '"'),
        duplicationCheck: inCheckLines.duplicationCheck.replaceAll("${endpoint}", inEndpoint).replaceAll("'", '"'),
        importInsertAfter: inCheckLines.insertAfter.map(element => {
            return element.replaceAll("'", '"')
        })
    };
};

const repalceFullJson = ({ inCheckLines, inEndpoint }) => {
    return {
        importLines: repalceLines({
            inCheckLines: inCheckLines.importLines,
            inEndpoint
        }),
        useLines: repalceLines({
            inCheckLines: inCheckLines.useLines,
            inEndpoint
        })
    };
};

const updateAppJs = ({ inEndPointsJsPath, actionName, inCheckLines,
    showLog = false }) => {

    validateEndpoint({ endpoint: actionName });

    const checkLinesAltered = repalceFullJson({
        inCheckLines: inCheckLines || checkLines,
        inEndpoint: actionName
    });

    alterFile({
        jsFilePath: inEndPointsJsPath,
        importLine: checkLinesAltered.importLines.importLine,
        duplicationCheck: checkLinesAltered.importLines.duplicationCheck,
        importInsertAfter: checkLinesAltered.importLines.importInsertAfter,
        showLog
    });

    alterFile({
        jsFilePath: inEndPointsJsPath,
        importLine: checkLinesAltered.useLines.importLine,
        duplicationCheck: checkLinesAltered.useLines.duplicationCheck,
        importInsertAfter: checkLinesAltered.useLines.importInsertAfter,
        showLog
    });

    return false;
};

export default updateAppJs;