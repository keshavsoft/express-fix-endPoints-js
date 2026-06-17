import index from "../../index.js";

const startFunc = async () => {
    await index({
        showLog: true,
        jsFilePath: process.cwd() + "/end-points.js",
        inActionName: "ToTest"
    });
};

startFunc().then();