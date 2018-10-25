"use strict";


window.onload = function() {
    var myButton2 = document.getElementById("demo2");
    var newButton = document.getElementById("reset");

    var myButton = document.getElementById("demo");

    myButton.onclick = doDemo;

    myButton2.onclick = doDemo2;
    newButton.onclick = reset;
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function doDemo2() {
    var thing = document.getElementById("input");
    thing = thing.innerHTML;
    var original = thing;
    var stringLen = thing.length;
    var inputArr = Array.from(thing);

    var origin = document.getElementById("original")
    var outputThing = document.getElementById("output");
    var inputThing = document.getElementById("input");
    var count = 0;
    while (count < stringLen) {
        var oneLoc = thing.indexOf("1");
        var zeroLoc = thing.indexOf("0");
        if (oneLoc != -1) {
            inputArr[oneLoc] = "-";
            thing = inputArr.join("");
            inputThing.innerHTML = thing;
            count = count + 1;
            await sleep(2000);
        } else {
            break;
            await sleep(2000);
        }
        if (zeroLoc != -1) {
            inputArr[zeroLoc] = "x";
            thing = inputArr.join("");
            inputThing.innerHTML = thing;
            await sleep(2000);
        } else {
            outputThing.innerHTML = "TM2 rejects ";
            origin.innerHTML = original;
            return false;
            await sleep(2000);
            break;
        }
        zeroLoc = thing.indexOf("0");
        if (zeroLoc != -1) {
            inputArr[zeroLoc] = "x";
            thing = inputArr.join("");
            inputThing.innerHTML = thing;
            await sleep(2000);
        } else {
            outputThing.innerHTML = "TM2 rejects ";
            origin.innerHTML = original;
            return false;
            await sleep(2000);
            break;
        }
    }

    var thing2 = thing;
    var testThing = Array.from(thing2);

    for (var j = 0; j < thing2.length; j++) {
        if (testThing[j] == "-") {
            delete testThing[j];
        } else if (testThing[j] == "x") {
            delete testThing[j];
        }
    }
    thing2 = testThing.join("");

    if (thing.indexOf("1") == -1 && thing.indexOf("0") == -1 && thing2.length == 0) {
        outputThing.innerHTML = "TM2 accepts ";
        origin.innerHTML = original;
    } else {
        outputThing.innerHTML = "TM2 rejects ";
        origin.innerHTML = original;
    }

}

function reset() {
    var thing = document.getElementById("input");
    var originalHTML = document.getElementById("original")
    var outputThing = document.getElementById("output");
    var original = originalHTML.innerHTML;
    thing.innerHTML = original;
    outputThing.innerHTML = "";
    originalHTML.innerHTML = "";
}

async function doDemo() {
    var thing = document.getElementById("input");
    thing = thing.innerHTML;
    var original = thing;
    var stringLen = thing.length;
    var inputArr = Array.from(thing);

    var origin = document.getElementById("original")
    var outputThing = document.getElementById("output");
    var inputThing = document.getElementById("input");
    var count = 0;
    var countOne = 0;
    while (count < stringLen) {
        var oneLoc = thing.indexOf("1");
        var zeroLoc = thing.indexOf("0");
        if (zeroLoc != -1) {
            inputArr[zeroLoc] = "x";
            thing = inputArr.join("");
            inputThing.innerHTML = thing;
            count = count + 1;
            await sleep(2000);
        } else {
            break;
            await sleep(2000);
        }
        if (oneLoc != -1) {
            inputArr[oneLoc] = "-";
            thing = inputArr.join("");
            inputThing.innerHTML = thing;
            await sleep(2000);
        } else {
            outputThing.innerHTML = "TM1 rejects ";
            origin.innerHTML = original;
            return false;
            await sleep(2000);
            break;
        }
    }

    var thing2 = thing;
    var testThing = Array.from(thing2);

    for (var j = 0; j < thing2.length; j++) {
        if (testThing[j] == "-") {
            delete testThing[j];
        } else if (testThing[j] == "x") {
            delete testThing[j];
        }
    }
    thing2 = testThing.join("");

    if (thing.indexOf("1") == -1 && thing.indexOf("0") == -1 && thing2.length == 0) {
        outputThing.innerHTML = "TM1 accepts";
        origin.innerHTML = original;
    } else {
        outputThing.innerHTML = "TM1 rejects ";
        origin.innerHTML = original;
    }

}