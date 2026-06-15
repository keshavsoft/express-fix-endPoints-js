import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endPointsJsPath, inActionName, inCheckLines, showLog }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({
        jsFilePath: endPointsJsPath,
        inActionName, inCheckLines, showLog
    });
};

export default load;