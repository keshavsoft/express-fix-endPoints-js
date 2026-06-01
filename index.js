import getLatestVersion from "./bin/core/getLatestVersion.js";

const load = async ({ endPointsJsPath, actionName, showLog }) => {
    const v = getLatestVersion();

    const module = await import(`./bin/${v}/start.js`);

    await module.default({ endPointsJsPath, actionName, showLog });
};

export default load;