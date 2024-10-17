function calculate() {
  // Master Previous
  var mvalue = document.getElementById("m-p-v").value;
  var nvalue = Number(mvalue);

  //Master Current
  var mvalue1 = document.getElementById("m-c-v").value;
  var nvalue1 = Number(mvalue1);

  // SM Previous
  var smvalue = document.getElementById("s-m-p-v").value;
  var nsmvalue = Number(smvalue);

  //SM Current
  var smvalue1 = document.getElementById("s-m-c-v").value;
  var nsmvalue1 = Number(smvalue1);

  //Electric
  var elecvalue = document.getElementById("elec").value;
  var nelecvalue = Number(elecvalue);

  var watervalue = document.getElementById("water").value;
  var nwatervalue = Number(watervalue);

  var masterbill = (nvalue - nvalue1) * 0.57;
  var smbill = (nsmvalue - nsmvalue1) * 0.57;

  var elecbill = (nelecvalue - (masterbill + smbill)) / 4;

  var waterbill = nwatervalue / 4;

  var purifier = 50 / 4;

  console.log(purifier);

  // Final Calculation:

  var masterFinal = masterbill + elecbill + waterbill + purifier;
  var smFinal = smbill + elecbill + waterbill + purifier;
  var sFinal = elecbill + waterbill + purifier;
  var bmFinal = elecbill + waterbill + purifier;

  //display on screen
  document.getElementById("om").textContent =
    "Master Room: " + Math.ceil(masterFinal);

  document.getElementById("osm").textContent =
    "Small Medium room: " + Math.ceil(smFinal);

  document.getElementById("os").textContent =
    "Small Room: " + Math.ceil(sFinal);

  document.getElementById("obm").textContent =
    "Big Medium Room: " + Math.ceil(bmFinal);
}

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const alertTrigger = document.getElementById("liveAlertBtn");
if (alertTrigger) {
  alertTrigger.addEventListener("click", () => {
    appendAlert("Verify the result carefully!", "primary");
  });
}
