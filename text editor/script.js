"use strict";
//  init
const textSpace = document.querySelector(".textspace");
const sizeController = document.querySelector("#font-size");
const colorController = document.querySelector("#font-color");
const fontPicker = document.querySelector("#font-name");
const addText = document.querySelector("#add");
const undoButton = document.querySelector("#undo");
const redoButton = document.querySelector("#redo");

//  --- FUNCTIONS -----
//SIZE
function fontSize() {
  const newSize= sizeController.value + 'px';
  textSpace.style.fontSize = newSize;
};

// COLOR
function fontColor() {
  const newColor=colorController.value;
  textSpace.style.color= newColor;
};

//FONT
function fontName(){
  const newFont= fontPicker.value;
  textSpace.style.fontFamily= newFont;
};

// ADD TEXT
addText.addEventListener('input',function (){
  textSpace.textContent= addText.value;
  });

// UNDO REDO
let textHistory = [];
let currentPosition = -1;

addText.addEventListener('input', function() {
  saveState(addText.value);
});

function saveState(text) {
  if (currentPosition === textHistory.length - 1) {
    textHistory.push(text);
    currentPosition++;
  } else {
    textHistory = textHistory.slice(0, currentPosition + 1);
    textHistory.push(text);
    currentPosition++;
  }
}

function undo() {
  if (currentPosition > 0) {
    currentPosition--;
    addText.value = textHistory[currentPosition];
    textSpace.textContent=addText.value;
  }
}

function redo() {
  if (currentPosition < textHistory.length - 1) {
    currentPosition++;
    addText.value = textHistory[currentPosition];
    textSpace.textContent=addText.value;
  }
}