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
	document.getElementById("star").src = `cgtemp/${stars}.png`
}

function typeInput() {
	var type = document.getElementById("typeinput").value;
	if (type == "Creature") {
		toggleCreature("block");
		document.getElementById("text").className = "shaimus-light card-text-4-lines";
		document.getElementById("maincard").src = `cgtemp/sindiancard.jpg`;
	} else {
		toggleCreature("none");
		document.getElementById("maincard").src = `cgtemp/${type.toLowerCase()}.jpg`;
	}
	if (type == "Resource" || type == "Attachment" || type == "Permanent Resource") {
		document.getElementById("text").className = "shaimus-light card-text-res-attach";
	}
	if (type == "Attachment") {
		document.getElementById("text").style.top = "420px";
	} else {
		document.getElementById("text").style.top = "";
	}
	if (type == "Activator") {
		toggleActi("block");
		document.getElementById("text").className = "shaimus-light card-text-acti-1-lines";
		document.getElementById("maincard").src = `cgtemp/activator1 line.jpg`;
		document.getElementById("acti-cond").className = "shaimus acti-text-1-lines";
		document.getElementById("art").className = "art-acti-1-lines";
	} else if (type == "Permanent Resource") {
		document.getElementById("art").className = `art-permanent-resource`;
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