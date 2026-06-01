import index from "../../index.js";
import checkLines from "./checkLines.json" with {type: "json"};

const startFunc = async () => {
    await index({
        showLog: true,
        endpoint: "Alter",
        checkLines
    });
};

startFunc().then();