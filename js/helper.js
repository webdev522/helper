const APP_NAME = "helper.js";
const SETTING_MENU_ID = "setting-menu";
const SETTING_USER_ID = "setting-user";
const APP_FONTS = ["", "Roboto", "Source+Sans+Pro"];
const ZOOM_SETTINGS = [1, 1.25, 1.5, 1.75, 2, 2.25, 2.5, 2.75, 3];

let elementStyles = {};

// color setting
let bgColor = undefined;
let textColor = undefined;
let isColorApplied = false;

// font setting
let font = undefined;
let selectedFontIndex = 0;

// font size setting
let fontSize = undefined;
let selectedFontSizeIndex = 0;

// line height setting
let lineHeight = undefined;
let selectedLineHeightIndex = 0;

// letter spacing setting
let letterSpacing = undefined;
let selectedLetterSpacingIndex = 0;

const ICON_USER = `
<svg width="43" height="43" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="43" cy="43" r="41" fill="#EA6B2D" stroke="white" stroke-width="4"/>
<path d="M27.1667 59C27.1667 59 24 59 24 55.8333C24 52.6667 27.1667 43.1667 43 43.1667C58.8333 43.1667 62 52.6667 62 55.8333C62 59 58.8333 59 58.8333 59H27.1667ZM43 40C45.5196 40 47.9359 38.9991 49.7175 37.2175C51.4991 35.4359 52.5 33.0196 52.5 30.5C52.5 27.9804 51.4991 25.5641 49.7175 23.7825C47.9359 22.0009 45.5196 21 43 21C40.4804 21 38.0641 22.0009 36.2825 23.7825C34.5009 25.5641 33.5 27.9804 33.5 30.5C33.5 33.0196 34.5009 35.4359 36.2825 37.2175C38.0641 38.9991 40.4804 40 43 40Z" fill="white"/>
</svg>
`;

const HTML_SETTING_MENU = `
  <div style="width: 100%; height: 63px; background-color: #ea6b2d; padding: 0 17px; display: flex; justify-content: space-between; align-items: center; box-sizing: border-box; color: white;">
    <div style="font-weight: 500; font-size: 14px; line-height: 16px;">
      Accessibility Menu
    </div>
    <div style="width: 14px; height: 14px; cursor: pointer;" onclick="hideMenu()">
      <svg width="14" height="14" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.00329 1.00326C1.18327 0.822831 1.39708 0.679677 1.63246 0.582002C1.86785 0.484327 2.1202 0.434052 2.37504 0.434052C2.62989 0.434052 2.88224 0.484327 3.11763 0.582002C3.35301 0.679677 3.56682 0.822831 3.74679 1.00326L14 11.2604L24.2533 1.00326C24.4334 0.823123 24.6473 0.680227 24.8827 0.582736C25.118 0.485244 25.3703 0.435066 25.625 0.435066C25.8798 0.435066 26.1321 0.485244 26.3674 0.582736C26.6028 0.680227 26.8167 0.823123 26.9968 1.00326C27.1769 1.1834 27.3198 1.39726 27.4173 1.63263C27.5148 1.86799 27.565 2.12026 27.565 2.37501C27.565 2.62977 27.5148 2.88204 27.4173 3.1174C27.3198 3.35277 27.1769 3.56662 26.9968 3.74676L16.7397 14L26.9968 24.2533C27.1769 24.4334 27.3198 24.6473 27.4173 24.8826C27.5148 25.118 27.565 25.3703 27.565 25.625C27.565 25.8798 27.5148 26.132 27.4173 26.3674C27.3198 26.6028 27.1769 26.8166 26.9968 26.9968C26.8167 27.1769 26.6028 27.3198 26.3674 27.4173C26.1321 27.5148 25.8798 27.565 25.625 27.565C25.3703 27.565 25.118 27.5148 24.8827 27.4173C24.6473 27.3198 24.4334 27.1769 24.2533 26.9968L14 16.7396L3.74679 26.9968C3.56665 27.1769 3.3528 27.3198 3.11743 27.4173C2.88207 27.5148 2.6298 27.565 2.37504 27.565C2.12029 27.565 1.86802 27.5148 1.63266 27.4173C1.39729 27.3198 1.18344 27.1769 1.00329 26.9968C0.823154 26.8166 0.680258 26.6028 0.582766 26.3674C0.485275 26.132 0.435096 25.8798 0.435096 25.625C0.435096 25.3703 0.485275 25.118 0.582766 24.8826C0.680258 24.6473 0.823154 24.4334 1.00329 24.2533L11.2604 14L1.00329 3.74676C0.822862 3.56679 0.679708 3.35298 0.582033 3.11759C0.484358 2.88221 0.434082 2.62986 0.434082 2.37501C0.434082 2.12017 0.484358 1.86782 0.582033 1.63243C0.679708 1.39705 0.822862 1.18324 1.00329 1.00326Z" fill="white"/>
        </svg>
    </div>
  </div>
  <div style="width: 100%; padding: 17px; box-sizing: border-box;">
    <div style="border: 1px solid #b1b1b1; border-radius: 5px; box-sizing: border-box;">
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; border-bottom: 1px solid #b1b1b1; border-right: 1px solid #b1b1b1; box-sizing: border-box;">
          <div style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;" onClick="settingClickHandle('fontSize')">
            <svg width="36" height="23" viewBox="0 0 73 46" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.2441 18.1133H14.1895V46H10.0859V18.1133H0.0527344V14.7188H24.2441V18.1133ZM72.0273 5.4375H57.4023V46H51.4336V5.4375H36.8398V0.5H72.0273V5.4375Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Bigger Text
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; border-bottom: 1px solid #b1b1b1; box-sizing: border-box;">
          <div style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;" onClick="settingClickHandle('letterSpacing')">
            <svg width="15" height="17" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1484 26.0938H7.85156L4.64062 35H0L13.0312 0.875H16.9688L30.0234 35H25.4062L22.1484 26.0938ZM9.21094 22.3906H20.8125L15 6.42969L9.21094 22.3906Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Letter Spacing
          </div>
        </div>
      </div>
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; border-bottom: 1px solid #b1b1b1; border-right: 1px solid #b1b1b1; box-sizing: border-box;">
          <div id="icon-font" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;" onClick="settingClickHandle('font')">
            <svg width="27" height="18" viewBox="0 0 55 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.8047 26.0938H8.50781L5.29688 35H0.65625L13.6875 0.875H17.625L30.6797 35H26.0625L22.8047 26.0938ZM9.86719 22.3906H21.4688L15.6562 6.42969L9.86719 22.3906ZM50.25 35C50 34.5 49.7969 33.6094 49.6406 32.3281C47.625 34.4219 45.2188 35.4688 42.4219 35.4688C39.9219 35.4688 37.8672 34.7656 36.2578 33.3594C34.6641 31.9375 33.8672 30.1406 33.8672 27.9688C33.8672 25.3281 34.8672 23.2812 36.8672 21.8281C38.8828 20.3594 41.7109 19.625 45.3516 19.625H49.5703V17.6328C49.5703 16.1172 49.1172 14.9141 48.2109 14.0234C47.3047 13.1172 45.9688 12.6641 44.2031 12.6641C42.6562 12.6641 41.3594 13.0547 40.3125 13.8359C39.2656 14.6172 38.7422 15.5625 38.7422 16.6719H34.3828C34.3828 15.4062 34.8281 14.1875 35.7188 13.0156C36.625 11.8281 37.8438 10.8906 39.375 10.2031C40.9219 9.51562 42.6172 9.17188 44.4609 9.17188C47.3828 9.17188 49.6719 9.90625 51.3281 11.375C52.9844 12.8281 53.8438 14.8359 53.9062 17.3984V29.0703C53.9062 31.3984 54.2031 33.25 54.7969 34.625V35H50.25ZM43.0547 31.6953C44.4141 31.6953 45.7031 31.3438 46.9219 30.6406C48.1406 29.9375 49.0234 29.0234 49.5703 27.8984V22.6953H46.1719C40.8594 22.6953 38.2031 24.25 38.2031 27.3594C38.2031 28.7188 38.6562 29.7812 39.5625 30.5469C40.4688 31.3125 41.6328 31.6953 43.0547 31.6953Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Change Font
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; border-bottom: 1px solid #b1b1b1; box-sizing: border-box;">
          <div style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;" onClick="settingClickHandle('lineHeight')">
            <svg width="15" height="17" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.1484 26.0938H7.85156L4.64062 35H0L13.0312 0.875H16.9688L30.0234 35H25.4062L22.1484 26.0938ZM9.21094 22.3906H20.8125L15 6.42969L9.21094 22.3906Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Line Height
          </div>
        </div>
      </div>
      <div style="display: flex;">
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; border-right: 1px solid #b1b1b1; box-sizing: border-box;">
          <div style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;">
            <svg width="37" height="37" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M54.075 65.6719C57.7805 61.9766 60.7193 57.5854 62.7223 52.7507C64.7254 47.9161 65.7533 42.7332 65.7468 37.5C65.7533 32.2668 64.7254 27.0839 62.7223 22.2493C60.7193 17.4146 57.7805 13.0234 54.075 9.32812L50.7562 12.6422C54.0259 15.9028 56.6189 19.7774 58.3862 24.0433C60.1536 28.3093 61.0604 32.8824 61.0547 37.5C61.0547 47.2078 57.1172 55.9969 50.7562 62.3578L54.075 65.6719Z" fill="black"/>
              <path d="M47.4422 59.0437C50.2757 56.2177 52.5229 52.8596 54.0545 49.1625C55.5862 45.4653 56.3721 41.5019 56.3672 37.5C56.3721 33.4981 55.5862 29.5347 54.0545 25.8375C52.5229 22.1404 50.2757 18.7823 47.4422 15.9563L44.1282 19.2703C46.5257 21.6616 48.4271 24.5031 49.7231 27.6316C51.019 30.76 51.684 34.1138 51.6797 37.5C51.6852 40.8867 51.0213 44.2411 49.7261 47.3704C48.431 50.4997 46.5301 53.3421 44.1329 55.7344L47.4422 59.0437Z" fill="black"/>
              <path d="M46.9922 37.5C46.9958 40.2706 46.4518 43.0146 45.3916 45.5743C44.3313 48.1341 42.7757 50.459 40.8141 52.4156L37.5 49.1016C39.0257 47.5797 40.2356 45.7713 41.0602 43.7803C41.8847 41.7893 42.3077 39.655 42.3047 37.5C42.3047 32.9719 40.4672 28.8703 37.5 25.8984L40.8141 22.5844C42.7757 24.541 44.3313 26.8659 45.3916 29.4256C46.4518 31.9854 46.9958 34.7294 46.9922 37.5ZM32.8125 18.75C32.8119 18.309 32.6868 17.8771 32.4517 17.5039C32.2166 17.1308 31.881 16.8316 31.4835 16.6406C31.0859 16.4497 30.6426 16.3748 30.2044 16.4245C29.7662 16.4743 29.3509 16.6467 29.0063 16.9219L17.9297 25.7812H7.03125C6.40965 25.7812 5.81351 26.0282 5.37397 26.4677C4.93443 26.9072 4.6875 27.5034 4.6875 28.125V46.875C4.6875 47.4966 4.93443 48.0927 5.37397 48.5323C5.81351 48.9718 6.40965 49.2187 7.03125 49.2187H17.9297L29.0063 58.0781C29.3509 58.3533 29.7662 58.5257 30.2044 58.5754C30.6426 58.6252 31.0859 58.5503 31.4835 58.3594C31.881 58.1684 32.2166 57.8692 32.4517 57.496C32.6868 57.1229 32.8119 56.691 32.8125 56.25V18.75ZM20.2125 29.9531L28.125 23.625V51.375L20.2125 45.0469C19.7976 44.714 19.2819 44.5322 18.75 44.5312H9.375V30.4687H18.75C19.2819 30.4678 19.7976 30.286 20.2125 29.9531Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Text Reader
          </div>
        </div>
        <div style="display: flex; flex-direction: column; justify-content: center; align-items: center; width: 50%; height: 93px; box-sizing: border-box;">
          <div id="icon-color" style="width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer;" onClick="settingClickHandle('color')">
            <svg width="30" height="30" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0L37.5 0C39.4891 0 41.3968 0.790176 42.8033 2.1967C44.2098 3.60322 45 5.51088 45 7.5V15H52.5C54.4891 15 56.3968 15.7902 57.8033 17.1967C59.2098 18.6032 60 20.5109 60 22.5V52.5C60 54.4891 59.2098 56.3968 57.8033 57.8033C56.3968 59.2098 54.4891 60 52.5 60H22.5C20.5109 60 18.6032 59.2098 17.1967 57.8033C15.7902 56.3968 15 54.4891 15 52.5V45H7.5C5.51088 45 3.60322 44.2098 2.1967 42.8033C0.790176 41.3968 0 39.4891 0 37.5V7.5ZM7.5 3.75C6.50544 3.75 5.55161 4.14509 4.84835 4.84835C4.14509 5.55161 3.75 6.50544 3.75 7.5V37.5C3.75 38.4946 4.14509 39.4484 4.84835 40.1516C5.55161 40.8549 6.50544 41.25 7.5 41.25H37.5C38.4946 41.25 39.4484 40.8549 40.1516 40.1516C40.8549 39.4484 41.25 38.4946 41.25 37.5V7.5C41.25 6.50544 40.8549 5.55161 40.1516 4.84835C39.4484 4.14509 38.4946 3.75 37.5 3.75H7.5Z" fill="black"/>
            </svg>
          </div>
          <div style="font-size: 13px; line-height: 15px;">
            Background
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style="padding: 0 17px;">
    <div style="height: 49px; background: #ea6b2d; display: flex; justify-content: center; align-items: center; border-radius: 5px; cursor: pointer; color: white; font-size: 18px;" onclick="resetStyle()">
      Reset All
    </div>
  </div>
`;

// window.onload = function () {};

window.addEventListener("DOMContentLoaded", function () {
  // applyStyle();
  catchStyles();
  initElements();
  addFonts();
  createMenu();
  test();
});

function test() {
  // font size = always with px
  // line height = can with %
  // text color = opposite or inherit value passed in the link
  // letter spacing = TBD (normal 0 but always with px)
  // change font = import multiple google font
  // var el = document.getElementById("header");
  // console.log(el.currentStyle);
  // var size = window.getComputedStyle(el, null).getPropertyValue("font-size");
  // var lineHeight = window
  //   .getComputedStyle(el, null)
  //   .getPropertyValue("line-height");
  // var letterSpacing = window
  //   .getComputedStyle(el, null)
  //   .getPropertyValue("letter-spacing");
  // console.log(size, lineHeight, letterSpacing);
}

function catchStyles() {
  const scripts = document.getElementsByTagName("script");

  if (!scripts || !scripts.length) {
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

  const { bg, text } = options;

  const hexRegex = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;
  const rgbRegex =
    /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i;

  // set background of body
  bgColor = undefined;

  if (bg && bg.match(hexRegex)) {
    bgColor = bg;
  }

  if (bg && bg.match(rgbRegex)) {
    bgColor = bg;
  }

  // set color of all elements
  textColor = undefined;

  if (text && text.match(hexRegex)) {
    textColor = text;
  }

  if (text && text.match(rgbRegex)) {
    textColor = text;
  }

  console.log(bgColor, textColor);
}

function initElements() {
  const elements = document.body.getElementsByTagName("*");

  for (const element of elements) {
    const uuid = uuidv4();
    element.setAttribute("data-uuid", uuid);

    const { cssText } = element.style;
    if (cssText) {
      const styles = cssText.split(";");
      const obj = {};
      for (const style of styles) {
        if (!style) continue;
        const t = style.split(":");
        const property = t[0].trim();
        const value = t[1].trim();
        if (property && value) {
          obj[property] = value;
        }
      }
      elementStyles[uuid] = obj;
    }
  }

  // console.log(elementStyles);
}

function addFonts() {
  for (const font of APP_FONTS) {
    if (!font) continue;
    const link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute(
      "href",
      `https://fonts.googleapis.com/css?family=${font}`
    );
    document.head.appendChild(link);
  }
}

function createMenu() {
  // user icon
  const user = document.createElement("div");
  user.setAttribute("id", SETTING_USER_ID);
  user.style.cssText = `
    position: fixed;
    width: 43px;
    height: 43px;
    right: 15px;
    bottom: 17px;
    cursor: pointer;
  `;
  user.innerHTML = ICON_USER;
  user.addEventListener("click", function () {
    const display = document.getElementById(SETTING_MENU_ID).style["display"];
    if (display === "none") {
      showMenu();
    } else {
      hideMenu();
    }
  });
  document.body.appendChild(user);

  // setting
  const menu = document.createElement("div");
  menu.setAttribute("id", SETTING_MENU_ID);

  menu.style.cssText = `
    width: 331px;
    height: 445px;
    position: fixed;
    right: 58px;
    bottom: 58px;
    background: #fdfdfd;
    border: 1px solid #b1b1b1;
    font-family: Roboto;
    font-style: normal;
    box-sizing: border-box;
    border-radius: 10px;
    overflow: hidden;
    user-select: none;
    display: none;
  `;
  menu.innerHTML = HTML_SETTING_MENU;
  document.body.appendChild(menu);
}

function showMenu() {
  const menu = document.getElementById(SETTING_MENU_ID);
  menu.style["display"] = "block";
}

function hideMenu() {
  const menu = document.getElementById(SETTING_MENU_ID);
  menu.style["display"] = "none";
}

function updateIconStyle(element, toggle) {
  if (toggle) {
    element.style.setProperty("background-color", "#ccc");
    element.style.setProperty("box-shadow", "#333 0px 0px 5px inset");
    element.style.setProperty("border-radius", "5px");
  } else {
    element.style.removeProperty("background-color");
    element.style.removeProperty("box-shadow");
    element.style.removeProperty("border-radius");
  }
}

function applyStyle() {
  const elements = document.body.getElementsByTagName("*");

  for (const element of elements) {
    if (!element.dataset.uuid) continue;

    const { uuid } = element.dataset;
    if (selectedFontIndex > 0) {
      const newFont = APP_FONTS[selectedFontIndex].replace(/\+/g, " ");
      element.style.setProperty("font-family", newFont, "important");
    } else {
      if (uuid && elementStyles[uuid] && elementStyles[uuid]["font-family"]) {
        const value = elementStyles[uuid]["font-family"];
        if (value && value.includes(" !important")) {
          element.style.setProperty(
            "font-family",
            value.replace(/\s\!important/g, ""),
            "important"
          );
        } else {
          element.style.setProperty("font-family", value);
        }
      } else {
        element.style.removeProperty("font-family");
      }
    }
    updateIconStyle(
      document.getElementById("icon-font"),
      selectedFontIndex > 0
    );

    if (isColorApplied) {
      if (bgColor) {
        element.style.setProperty("background-color", bgColor, "important");
      }
      if (textColor) {
        element.style.setProperty("color", textColor, "important");
      }
    } else {
      if (
        bgColor &&
        uuid &&
        elementStyles[uuid] &&
        elementStyles[uuid]["background-color"]
      ) {
        const value = elementStyles[uuid]["background-color"];
        if (value && value.includes(" !important")) {
          element.style.setProperty(
            "background-color",
            value.replace(/\s\!important/g, ""),
            "important"
          );
        } else {
          element.style.setProperty("background-color", value);
        }
      } else {
        element.style.removeProperty("background-color");
      }

      if (
        textColor &&
        uuid &&
        elementStyles[uuid] &&
        elementStyles[uuid]["color"]
      ) {
        const value = elementStyles[uuid]["color"];
        if (value && value.includes(" !important")) {
          element.style.setProperty(
            "color",
            value.replace(/\s\!important/g, ""),
            "important"
          );
        } else {
          element.style.setProperty("color", value);
        }
      } else {
        element.style.removeProperty("color");
      }
    }

    updateIconStyle(document.getElementById("icon-color"), isColorApplied);
  }
}

// reset style
function resetStyle() {
  // color setting
  isColorApplied = false;

  // font setting
  font = undefined;
  selectedFontIndex = 0;

  // font size setting
  fontSize = undefined;
  selectedFontSizeIndex = 0;

  // line height setting
  lineHeight = undefined;
  selectedLineHeightIndex = 0;

  // letter spacing setting
  letterSpacing = undefined;
  selectedLetterSpacingIndex = 0;

  const elements = document.body.getElementsByTagName("*");

  for (const element of elements) {
    const { uuid } = element.dataset;
    if (uuid) {
      const oldStyle = elementStyles[uuid];
      if (oldStyle) {
        const keys = Object.keys(oldStyle);
        for (let i = 0; i < keys.length; i++) {
          const value = oldStyle[keys[i]];
          if (value && value.includes(" !important")) {
            element.style.setProperty(
              keys[i],
              value.replace(/\s\!important/g, ""),
              "important"
            );
          } else {
            element.style.setProperty(keys[i], value);
          }
        }
      } else {
        element.removeAttribute("style");
      }
    }
  }
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

// update style
function settingClickHandle(prop) {
  if (prop === "font") {
    selectedFontIndex = (selectedFontIndex + 1) % APP_FONTS.length;
  } else if (prop === "fontSize") {
    selectedFontSizeIndex = (selectedFontSizeIndex + 1) % ZOOM_SETTINGS.length;
    console.log(selectedFontSizeIndex);
  } else if (prop === "letterSpacing") {
    selectedLetterSpacingIndex =
      (selectedLetterSpacingIndex + 1) % ZOOM_SETTINGS.length;
    console.log(selectedLetterSpacingIndex);
  } else if (prop === "lineHeight") {
    selectedLineHeightIndex =
      (selectedLineHeightIndex + 1) % ZOOM_SETTINGS.length;
    console.log(selectedLineHeightIndex);
  } else if (prop === "color") {
    isColorApplied = !isColorApplied;
  }

  applyStyle();
}
