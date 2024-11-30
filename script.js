var actiSpecific = document.getElementsByClassName("activator-specific");

function toggleActi(style_) {
	for (let i = 0; i < actiSpecific.length; i++) {
		actiSpecific[i].style.display = style_;
	}
}

var creatureSpecific = document.getElementsByClassName("creature-specific");

function toggleCreature(style_) {
	for (let i = 0; i < creatureSpecific.length; i++) {
		creatureSpecific[i].style.display = style_;
	}
}

function starInput() {
	var stars = document.getElementById("starinput").value;
	document.getElementById("star").src = `cgtemp/${stars}.png`;
	if (stars == "10star") {
		document.getElementById("star").width = 350;
	} else {
		document.getElementById("star").width = 320;
	}
}

function typeInput() {
	var type = document.getElementById("typeinput").value;
	if (type == "Creature") {
		toggleCreature("block");
		document.getElementById("text").className = "shaimus-light card-text-4-lines";
		document.getElementById("maincard").src = `cgtemp/sindiancard.jpg`;
		document.getElementById("ridrare").src = `cgtemp/ridrarecreature.png`;
	} else {
		toggleCreature("none");
		document.getElementById("maincard").src = `cgtemp/${type.toLowerCase()}.jpg`;
	}
	if (type == "Resource" || type == "Attachment" || type == "Permanent Resource" || type == "Planet") {
		document.getElementById("text").className = "shaimus-light card-text-res-attach";
		document.getElementById("ridrare").src = `cgtemp/ridrareresource.png`;

	}
	if (type == "Attachment") {
		document.getElementById("text").style.top = "420px";
		document.getElementById("ridrare").src = `cgtemp/ridrareattachment.png`;

		
	} else {
		document.getElementById("text").style.top = "";
	}
	if (type == "Activator") {
		toggleActi("block");
		document.getElementById("text").className = "shaimus-light card-text-acti-1-lines";
		document.getElementById("maincard").src = `cgtemp/activator1 line.jpg`;
		document.getElementById("acti-cond").className = "shaimus acti-text-1-lines";
		document.getElementById("art").className = "art-acti-1-lines";
		document.getElementById("ridrare").src = `cgtemp/ridrareactivator1lines.png`;
	} else if (type == "Permanent Resource") {
		document.getElementById("art").className = `art-permanent-resource`;
		document.getElementById("ridrare").src = `cgtemp/ridrarepermanentresource.png`;
		toggleActi("none");
	}
	else {
		toggleActi("none");
		document.getElementById("art").className = `art-${type.toLowerCase()}`;
	}
}

function planetInput() {
	var planet = document.getElementById("planetinput").value;
	document.getElementById("maincard").src = `cgtemp/${planet.toLowerCase()}card.jpg`;
}

function lineInput() {
	var line = document.getElementById("lineinput").value;
	var lineno = line[0]
	document.getElementById("maincard").src = `cgtemp/activator${line.toLowerCase()}.jpg`;
	document.getElementById("text").className = `shaimus-light card-text-acti-${lineno}-lines`;
	document.getElementById("acti-cond").className = `shaimus acti-text-${lineno}-lines`;
	document.getElementById("art").className = `art-acti-${lineno}-lines`;
	document.getElementById("ridrare").src = `cgtemp/ridrareactivator${lineno}lines.png`;
}

function onFileSelected(event) {
	var selectedFile = event.target.files[0];
	var reader = new FileReader();
  
	var imgtag = document.getElementById("art");
	imgtag.title = selectedFile.name;
	imgtag.crossOrigin = "anonymous";

	reader.onload = function(event) {
	  imgtag.src = event.target.result;
	};
  
	reader.readAsDataURL(selectedFile);
}

function arcTextInput() {
	var arcplanet = document.getElementById("archetypeinputdropdown").value;
	var text = document.getElementById("archetypeinput").value;
	document.getElementById("text").innerHTML += `<span class="shaimus ${arcplanet.toLowerCase()}-rules-text">${text}</span><span>&nbsp;</span>`;
}

function textSizeInput() {
	document.getElementById("text").style.fontSize = document.getElementById("textsizeinput").value + "px";
}

function titleSizeInput() {
	document.getElementById("title").style.fontSize = document.getElementById("titlesizeinput").value + "px";
}

function textOffsetInput() {
	document.getElementById("text").style.top = document.getElementById("textoffsetinput").value + "px";
}

function titleOffsetInput() {
	document.getElementById("title").style.top = document.getElementById("titleoffsetinput").value + "px";
}

function textSpacingInput() {
	document.getElementById("text").style.lineHeight = document.getElementById("textspacinginput").value + "px";
}

function ridRareInput() {
	document.getElementById("ridrare").style.display = document.getElementById("ridrareinput").checked ? "block" : "none";
}

var starhue = 0;
var starsat = 1;
var starbright = 1;

function starHue() {
	starhue = document.getElementById("starhue").value;
	document.getElementById("star").style.filter = `hue-rotate(${starhue}deg) saturate(${starsat}) brightness(${starbright})`;
}

function starSat() {
	starsat = document.getElementById("starsat").value;
	document.getElementById("star").style.filter = `hue-rotate(${starhue}deg) saturate(${starsat}) brightness(${starbright})`;
}

function starBright() {
	starbright = document.getElementById("starbright").value;
	document.getElementById("star").style.filter = `hue-rotate(${starhue}deg) saturate(${starsat}) brightness(${starbright})`;
}

function downloadURI(uri, name) {
	var link = document.createElement("a");
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
	delete link;
}

function getScreenshotOfElement() {
	console.log("true start")
    html2canvas(document.getElementById("container"), { width: 412.5, height: 562.5, useCORS: true, taintTest: false, allowTaint: false }).then(function(canvas) {
			var width = canvas.width;
			var height = canvas.height;
            var context = canvas.getContext('2d');
            var imageData = context.getImageData(0, 0, width, height).data;
            var outputCanvas = document.createElement('canvas');
            var outputContext = outputCanvas.getContext('2d');
            outputCanvas.width = width;
            outputCanvas.height = height;
            var idata = outputContext.createImageData(width, height);
            idata.data.set(imageData);
            outputContext.putImageData(idata, 0, 0);
            downloadURI(outputCanvas.toDataURL(), document.getElementById("title").innerText);
    });
}
toggleActi("none");
document.getElementById("ridrare").style.display = document.getElementById("ridrareinput").checked ? "block" : "none";