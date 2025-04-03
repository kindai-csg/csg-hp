const sleep = waitTime => new Promise(resolve => setTimeout(resolve, waitTime));

const topPanelTextContent = {
    "phase1": [
        "ゲーム開発",
        "Webアプリ開発",
    ],
    "phase2": [
        "3Dモデリング",
        "イラスト",
        "Python",
        "IOT",
    ],
    "last": [
        "「やってみたい」"
    ]
};

const topPanelTextChange = async function (list) {
    await sleep(500);
    let elem = document.getElementById("top-panel-text-change");
    elem.innerText = "";
    for (const phase of Object.keys(list)) {
        let contents = list[phase];
        for (const content of contents) {
            let contentStrings = [...content];
            if (phase === "last") {
                await sleep(200);
            }
            for (let i = 0; i < contentStrings.length; i++) {
                elem.innerText += contentStrings[i];
                await sleep(50);
            }
            if (phase !== "last") {
                let time;
                if (phase === "phase1") {
                    time = 500;
                } else if (phase === "phase2") {
                    time = 250;
                }
                await sleep(time);
                for (let i = contentStrings.length; i > 0; i--) {
                    elem.innerText = contentStrings.slice(0, i - 1).join("");
                    await sleep(50);
                }
            }
        }
    }
}

function topOnloadFunction() {
    topPanelTextChange(topPanelTextContent);
}

$(window).on('load', function () {
    topOnloadFunction()
});