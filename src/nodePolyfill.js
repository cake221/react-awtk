var awtk = require("./native/awtk.node");
awtk.init(320, 480, 'Hello-AWTK');
awtkStepId = setInterval(awtkStep, 16);
function awtkStep() {
  if(!awtk.step()) {
    clearInterval(awtkStepId);
    console.log("awtk quit");
    awtkStepId = 0;
  }
}
