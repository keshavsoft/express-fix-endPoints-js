// v2/AppJs/index.js

import fs from "fs";

import forImport from "./forImport.js";
import forUse from "./forUse.js";

const updateAppJs = ({ inEndPointsJsPath, actionName, showLog = false }) => {
    const fromImports = forImport({
        appJsPath: inEndPointsJsPath,
        endpoint: actionName, showLog
    });

    if (showLog) console.log("fromImports : ", fromImports);

    const fromUse = forUse({
        appJsPath: inEndPointsJsPath,
        endpoint: actionName,
        showLog
    });

    if (showLog) console.log("fromUse : ", fromUse);

    return false;
};

export default updateAppJs;