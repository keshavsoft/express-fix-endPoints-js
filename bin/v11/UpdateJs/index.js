// v2/AppJs/index.js
import fixAnyJs from "express-fix-any-js";
import checkLines from "./checkLines.json" with {type: "json"};
import alterFile from "./common/AlterFile/index.js";

const alterLines = ({ inCheckLines, inStartEndPoint }) => {
    inCheckLines.importLines.toInsertLine = inCheckLines.importLines.toInsertLine.replaceAll("<startEndPoint>", inStartEndPoint);
    inCheckLines.importLines.duplicationCheck = inCheckLines.importLines.duplicationCheck.replaceAll("<startEndPoint>", inStartEndPoint).replaceAll("'", '"');

    inCheckLines.useLines.toInsertLine = inCheckLines.useLines.toInsertLine.replaceAll("<startEndPoint>", inStartEndPoint);
    inCheckLines.useLines.duplicationCheck = inCheckLines.useLines.duplicationCheck.replaceAll("<startEndPoint>", inStartEndPoint).replaceAll("'", '"');
};

const updateAppJs = ({ inJsFilePath, inCheckLines, inStartEndPoint,
    showLog = false }) => {

    let localCheckLines = inCheckLines || checkLines;

    alterLines({ inCheckLines: localCheckLines, inStartEndPoint });

    fixAnyJs({
        showLog,
        jsFilePath: inJsFilePath,
        inCheckLines: localCheckLines
    });

    return false;
};

export default updateAppJs;