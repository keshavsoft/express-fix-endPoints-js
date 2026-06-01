import updateAppJs from "./UpdateAppJs/index.js";

export default ({ actionName, endPointsJsPath, showLog }) => {
    const localToPath = endPointsJsPath;

    const fromUpdate = updateAppJs({
        inEndPointsJsPath: `${localToPath}/end-points.js`,
        actionName,
        showLog
    });

    return true;
};