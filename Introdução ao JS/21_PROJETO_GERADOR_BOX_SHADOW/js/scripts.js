"use strict";

//#region Classes

class BoxShadowGenerator {
  constructor(
    horizontal,
    horizontalRef,
    vertical,
    verticalRef,
    blur,
    blurRef,
    spread,
    spreadRef,
    color,
    colorRef,
    opacity,
    opacityRef,
    inset,
    previewBox,
    rule,
    webKitRule,
    mozRule,
  ) {
    this.horizontal = horizontal;
    this.horizontalRef = horizontalRef;
    this.vertical = vertical;
    this.verticalRef = verticalRef;
    this.blur = blur;
    this.blurRef = blurRef;
    this.spread = spread;
    this.spreadRef = spreadRef;
    this.color = color;
    this.colorRef = colorRef;
    this.opacity = opacity;
    this.opacityRef = opacityRef;
    this.inset = inset;

    this.previewBox = previewBox;

    this.rule = rule;
    this.webKitRule = webKitRule;
    this.mozRule = mozRule;
  }

  initialize() {
    this.horizontalRef.value = this.horizontal.value;
    this.verticalRef.value = this.vertical.value;
    this.blurRef.value = this.blur.value;
    this.spreadRef.value = this.spread.value;
    this.colorRef.value = this.color.value;
    this.opacityRef.value = this.opacity.value;

    this.applyRule();
    this.showRule();
  }

  applyRule() {
    const rgbValue = this.hexToRgb(this.colorRef.value);

    const shadowRule = `${this.insetRef ? "inset" : ""} 
    ${this.horizontalRef.value}px 
    ${this.verticalRef.value}px 
    ${this.blurRef.value}px 
    ${this.spreadRef.value}px 
    rgba(${rgbValue}, ${this.opacityRef.value})`;

    this.previewBox.style.boxShadow = shadowRule;
    this.currentRule = shadowRule;
  }

  showRule() {
    this.rule.textContent = this.currentRule;
    this.webKitRule.textContent = this.currentRule;
    this.mozRule.textContent = this.currentRule;
  }

  updateValue(type, value) {
    switch (type) {
      case "horizontal":
        this.horizontalRef.value = value;
        break;
      case "vertical":
        this.verticalRef.value = value;
        break;
      case "blur":
        this.blurRef.value = value;
        break;
      case "spread":
        this.spreadRef.value = value;
        break;
      case "color":
        this.colorRef.value = value;
        break;
      case "opacity":
        this.opacityRef.value = value;
        break;
      case "inset":
        this.insetRef = value;
        break;
    }

    this.applyRule();
    this.showRule();
  }

  hexToRgb(hex) {
    return `${("0x" + hex[1] + hex[2]) | 0}, ${("0x" + hex[3] + hex[4]) | 0}, ${
      ("0x" + hex[5] + hex[6]) | 0
    }`;
  }
}

//#endregion

//#region Elementos
const horizontal = document.querySelector("#horizontal");
const horizontalRef = document.querySelector("#horizontal-value");
const vertical = document.querySelector("#vertical");
const verticalRef = document.querySelector("#vertical-value");
const blur = document.querySelector("#blur");
const blurRef = document.querySelector("#blur-value");
const spread = document.querySelector("#spread");
const spreadRef = document.querySelector("#spread-value");
const color = document.querySelector("#color");
const colorRef = document.querySelector("#color-value");
const opacity = document.querySelector("#opacity");
const opacityRef = document.querySelector("#opacity-value");
const inset = document.querySelector("#inset");

const previewBox = document.querySelector("#box");

const rulesArea = document.querySelector("#rules-area");
const rule = document.querySelector("#rule span");
const webKitRule = document.querySelector("#webkit-rule span");
const mozRule = document.querySelector("#moz-rule span");
const copyInstructions = document.querySelector("#copy-instructions");

const boxShadowGenerator = new BoxShadowGenerator(
  horizontal,
  horizontalRef,
  vertical,
  verticalRef,
  blur,
  blurRef,
  spread,
  spreadRef,
  color,
  colorRef,
  opacity,
  opacityRef,
  inset,
  previewBox,
  rule,
  webKitRule,
  mozRule,
);

//#endregion

//#region Eventos
[horizontal, vertical, blur, spread, color, opacity, inset].forEach((input) => {
  input.addEventListener("input", (e) => {
    boxShadowGenerator.updateValue(
      input.id,
      input.type === "checkbox" ? input.checked : input.value,
    );
  });
});

rulesArea.addEventListener("click", () => {
  const rules = rulesArea.textContent
    .replace(/\s/g, " ")
    .trim()
    .replace(/ +/g, " ");

  navigator.clipboard.writeText(rules).then(() => {
    copyInstructions.textContent = "Código copiado!";

    setTimeout(() => {
      copyInstructions.textContent = "Clique para copiar o código";
    }, 3000);
  });
});
//#endregion

//#region Inicialização
boxShadowGenerator.initialize();
//#endregion
