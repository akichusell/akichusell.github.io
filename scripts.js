window.onload = (val) => {
  const buttonContainer = document.getElementById('button_container');
  const buttonCount = 6; // 버튼 갯수

  for (let i = 0; i < buttonCount; i++) {
    const button = document.createElement('input');
    button.value = `${i + 1}번 파일`;
    button.type = "button";
    button.className = "json_button";
    button.onclick = () => {
      // 각 버튼의 onClick 이벤트 처리
      readFileToJson(`messagebase${i+1}.json`);
    };
    buttonContainer.appendChild(button);
  }
}

let fileData = {}

function readMultiFiles(e) {
  fileData = {};

  const files = e.currentTarget.files;
  Object.keys(files).forEach(i => {
    const file = files[i];
    const reader = new FileReader();
    reader.onload = () => {
      fileData[`maap://${file.name}`] = reader.result;
    }
    reader.readAsArrayBuffer(file);
  })
  const removeBtn = document.querySelector(".custom-remove");
  const fileNameSpan = document.querySelector("#file-names");
  if (files.length === 0) {
    fileNameSpan.textContent = "로고 불러오기"
    removeBtn.style.visibility = "hidden";
  } else {
    fileNameSpan.textContent = `${files.length}개 파일 선택됨`;
    removeBtn.style.visibility = "visible";
  }
}

function removeFiles() {
  fileData = {};

  const removeBtn = document.querySelector(".custom-remove");
  const fileNameSpan = document.querySelector("#file-names");

  fileNameSpan.textContent = "로고 불러오기"
  removeBtn.style.visibility = "hidden";
}

async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

function readFileToJson(fileName) {
  const readFile = (url) => {
    return new Promise((resolve, reject) => {
      fetch(url)
      .then((response) => response.text())
      .then((data) => resolve(data))
      .catch((error) => reject(error));
    });
  };

  readFile(`messagebase_json/${fileName}`).then((data) => {
    document.getElementById('input_json').value = data;
  }).catch((error) => {
    console.error(error);
  });
}

window.addEventListener('load', function(ev) {
  // TODO: MUST implement function (listen)
  let appArea = document.querySelector("#flutter_app");
  // Download main.dart.js
  _flutter.loader.loadEntrypoint({
    serviceWorker: {
      serviceWorkerVersion: serviceWorkerVersion,
    },
    onEntrypointLoaded: function(engineInitializer) {
      engineInitializer.initializeEngine({
        hostElement: appArea,
      }).then(function(appRunner) {
        appRunner.runApp();
      });
    }
  });
});


function setupData(json) {
  if (json !== "") {
    let val = {
      "logos" : fileData,
      "message": json,
    }

    // TODO: MUST call function (for passing data to app)
    window.setupDataOnWeb(val);
  }
}

// TODO: MUST implement function (listen)
window.onExportToWeb = (val) => {
  document.getElementById("result_area").style.visibility = "visible";
  document.getElementById("result").value = val;
}

// TODO: MUST implement function (listen)
window.onRequestUpload = async (json) => {
  // like upload network delay
  await sleep(1000);

  let retJson = {}
  const keys = Object.keys(json);
  for (var i = 0; i < keys.length; i++) {
    const key = keys[i];
    const byte = json[key];
    //console.log("key : " + key + ", value : " + byte.length)
    retJson[key] = "maap://" + key + ".jpg";
  }
  return Promise.resolve(retJson);
}

// TODO: MUST implement function (listen)
window.onCloseApp = (rewrite) => {
  document.getElementById('input_json').value = '';
  document.getElementById("result_area").style.visibility = "hidden";
  document.getElementById("result").value = '';
}
