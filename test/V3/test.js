import index from "../../index.js";
import checkLines from "./checkLines.json" with {type: "json"};

const startFunc = async () => {
    await index({
        showLog: true,
        inActionName: "ShowAll",
        inCheckLines: checkLines
    });
};

startFunc().then();