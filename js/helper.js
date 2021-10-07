const APP_NAME = "helper.js";
const SETTING_MENU_NAME = "setting-menu";
let elementStyles = {};
let isApplied = false;

// window.onload = function () {};

window.addEventListener("DOMContentLoaded", function () {
  applyStyle();
  createMenu();
});

function createMenu() {
  const menu = document.createElement("div");
  menu.setAttribute("id", SETTING_MENU_NAME);

  menu.style.cssText = `
    position: absolute;
    bottom: 0%;
    width: 300px;
    height: 200px;
    background: white;
    right: 0%;
    visibility: visible;
  `;

  const resetButton = document.createElement("button");
  resetButton.innerText = "Reset";
  resetButton.onclick = resetStyle;

  menu.appendChild(resetButton);

  document.body.appendChild(menu);
}

function applyStyle() {
  const scripts = document.getElementsByTagName("script");

  if (!scripts || !scripts.length) {
    console.log("exit");
    return;
  }

  let name;

  for (const s of scripts) {
    const src = s.src;
    if (src.includes(APP_NAME)) {
      name = src.split("?")[1];
    }
  }

  if (!name) {
    return;
  }

  const options = JSON.parse(
    '{"' + name.replace(/&/g, '","').replace(/=/g, '":"') + '"}',
    function (key, value) {
      return key === "" ? value : decodeURIComponent(value);
    }
  );

  console.log(options);

  const { bg, text } = options;

  const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  const rgbRegex =
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i;

  // set background of body
  let bgColor = null;

  if (bg && bg.match(hexRegex)) {
    bgColor = bg;
  }

  if (bg && bg.match(rgbRegex)) {
    bgColor = bg;
  }

  // set color of all elements
  let textColor = null;

  if (text && text.match(hexRegex)) {
    textColor = text;
  }

  if (text && text.match(rgbRegex)) {
    textColor = text;
  }

  if (!bgColor || !textColor) {
    return;
  }

  elementStyles = {};

  if (bgColor) {
    const { cssText } = document.body.style;
    if (cssText) {
      const uuid = uuidv4();
      document.body.setAttribute("data-uuid", uuid);
      elementStyles[uuid] = cssText;
    }

    document.body.setAttribute(
      "style",
      `background-color: ${bgColor} !important`
    );
  }

  const elements = document.body.getElementsByTagName("*");

  for (const element of elements) {
    const id = element.getAttribute("id");
    if (id === SETTING_MENU_NAME) {
      continue;
    }

    const { cssText } = element.style;
    if (cssText) {
      const uuid = uuidv4();
      element.setAttribute("data-uuid", uuid);
      elementStyles[uuid] = cssText;
    }

    element.style.cssText = `
      ${textColor ? "color: " + textColor + " !important;" : ""}
      ${bgColor ? "background-color: " + bgColor + " !important;" : ""}
    `;
  }

  isApplied = true;
}

// reset style
function resetStyle() {
  if (!isApplied) return;

  const elements = document.body.getElementsByTagName("*");

  for (const element of elements) {
    const id = element.getAttribute("id");
    if (id === "setting-menu") {
      continue;
    }
    const { uuid } = element.dataset;
    const oldStyle = elementStyles[uuid];

    if (uuid && oldStyle) {
      element.setAttribute("style", oldStyle);
      delete elementStyles[uuid];
      element.removeAttribute("data-uuid");
    } else {
      element.removeAttribute("style");
    }
  }

  // reset body
  const { uuid } = document.body.dataset;
  const oldStyle = elementStyles[uuid];

  if (uuid && oldStyle) {
    document.body.style.cssText = oldStyle;
    delete elementStyles[uuid];
    document.body.removeAttribute("data-uuid");
  } else {
    element.removeAttribute("style");
  }

  isApplied = false;
}

// gen uuid v4
function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}
