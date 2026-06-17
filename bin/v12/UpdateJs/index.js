// v2/AppJs/index.js
import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const alterLines = ({ inCheckLines, inActionName }) => {
    inCheckLines.importLines.toInsertLine = inCheckLines.importLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    inCheckLines.importLines.duplicationCheck = inCheckLines.importLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');

    inCheckLines.useLines.toInsertLine = inCheckLines.useLines.toInsertLine.replaceAll("${endpoint}", inActionName);
    inCheckLines.useLines.duplicationCheck = inCheckLines.useLines.duplicationCheck.replaceAll("${endpoint}", inActionName).replaceAll("'", '"');
};

const updateAppJs = ({ inJsFilePath, inCheckLines, inActionName,
    showLog = false }) => {

    let localCheckLines = inCheckLines || checkLines;

    alterLines({ inCheckLines: localCheckLines, inActionName });

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default updateAppJs;