"use strict";(self.webpackChunk_ebay_skin=self.webpackChunk_ebay_skin||[]).push([[7490],{"./src/sass/floating-label/stories/floating-label.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RTL:()=>RTL,RTLSelectInline:()=>RTLSelectInline,TextArea:()=>TextArea,__namedExportsOrder:()=>__namedExportsOrder,base:()=>base,default:()=>__WEBPACK_DEFAULT_EXPORT__,disabledTextbox:()=>disabledTextbox,invalidTextbox:()=>invalidTextbox,invalidTextboxWithPlaceholder:()=>invalidTextboxWithPlaceholder,invalidTextboxWithValue:()=>invalidTextboxWithValue,longText:()=>longText,longTextInline:()=>longTextInline,phoneInput:()=>phoneInput,placeholder:()=>placeholder,select:()=>select,selectInline:()=>selectInline,selectInlineDoubled:()=>selectInlineDoubled,textSpacing:()=>textSpacing,value:()=>value});const __WEBPACK_DEFAULT_EXPORT__={title:"Skin/Floating Label"},base=()=>'\n<span class="floating-label">\n    <label class="floating-label__label" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName" type="text" />\n    </span>\n</span>\n',RTL=()=>'\n<div dir="rtl">\n    <span class="floating-label">\n        <label class="floating-label__label" for="firstName">First Name</label>\n        <span class="textbox">\n            <input class="textbox__control" id="firstName" type="text" />\n        </span>\n    </span>\n<div>\n',value=()=>'\n<span class="floating-label">\n    <label class="floating-label__label" for="lastName">Last Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="lastName" type="text" value="Smith" />\n    </span>\n</span>\n',placeholder=()=>'\n<span class="floating-label">\n    <label class="floating-label__label" for="dob">Date Of Birth</label>\n    <span class="textbox">\n        <input class="textbox__control" id="dob" type="text" placeholder="MM/DD/YYYY" />\n    </span>\n</span>\n',disabledTextbox=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--disabled" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName02" type="text" disabled />\n    </span>\n</span>\n',invalidTextbox=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--inline floating-label__label--invalid" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" />\n    </span>\n</span>\n',invalidTextboxWithValue=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" value="value" />\n    </span>\n</span>\n',invalidTextboxWithPlaceholder=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--invalid" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName03" type="text" aria-invalid="true" placeholder="placeholder" />\n    </span>\n</span>\n',longText=()=>'\n<span class="floating-label">\n    <label class="floating-label__label" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName" type="text" />\n    </span>\n</span>\n',longTextInline=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--inline" for="firstName">Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName" type="text" />\n    </span>\n</span>\n',select=()=>'\n<span class="floating-label">\n    <label class="floating-label__label">Select Option</label>\n    <span class="select">\n        <select aria-label="Select demo" name="options">\n            <option value="">Choose an option</option>\n            <option value="item1">Pick Option 1 (default)</option>\n            <option value="item2">Pick Option 2</option>\n            <option value="item3">Pick Option 3</option>\n        </select>\n        <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">\n            <use href="#icon-chevron-down-12"></use>\n        </svg>\n    </span>\n</span>\n',selectInline=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>\n    <span class="select">\n        <select aria-label="Select demo" name="options">\n            <option value=""></option>\n            <option value="item1">Pick Option 1 (default)</option>\n            <option value="item2">Pick Option 2</option>\n            <option value="item3">Pick Option 3</option>\n        </select>\n        <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">\n            <use href="#icon-chevron-down-12"></use>\n        </svg>\n    </span>\n</span>\n',selectInlineDoubled=()=>'\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--inline">Select Option long text with ellipsis</label>\n    <span class="select">\n        <select aria-label="Select demo" name="options">\n            <option value=""></option>\n            <option value="item1">Pick Option 1 (default)</option>\n            <option value="item2">Pick Option 2</option>\n            <option value="item3">Pick Option 3</option>\n        </select>\n        <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">\n            <use href="#icon-chevron-down-12"></use>\n        </svg>\n    </span>\n</span>\n<span class="floating-label">\n    <label class="floating-label__label floating-label__label--inline">Select Option long text</label>\n    <span class="select">\n        <select aria-label="Select demo" name="options">\n            <option value=""></option>\n            <option value="item1">Pick Option 1 (default)</option>\n            <option value="item2">Pick Option 2</option>\n            <option value="item3">Pick Option 3</option>\n        </select>\n        <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">\n            <use href="#icon-chevron-down-12"></use>\n        </svg>\n    </span>\n</span>\n\n',RTLSelectInline=()=>'\n<div dir="rtl">\n    <span class="floating-label">\n        <label class="floating-label__label floating-label__label--inline">Select Option long text</label>\n        <span class="select">\n            <select aria-label="Select demo" name="options">\n                <option value=""></option>\n                <option value="item1">Pick Option 1 (default)</option>\n                <option value="item2">Pick Option 2</option>\n                <option value="item3">Pick Option 3</option>\n            </select>\n            <svg class="icon icon--chevron-down-12" height="8" width="8" aria-hidden="true">\n                <use href="#icon-chevron-down-12"></use>\n            </svg>\n        </span>\n    </span>\n</div>\n',TextArea=()=>'\n<span class="floating-label floating-label--opaque">\n    <label class="floating-label__label" for="first-name">Enter list of users</label>\n    <span class="textbox">\n        <textarea aria-label="Textbox demo" class="textbox__control"></textarea>\n    </span>\n</span>\n',textSpacing=()=>'\n<span class="floating-label demo-a11y-text-spacing">\n    <label class="floating-label__label" for="firstName">First Name</label>\n    <span class="textbox">\n        <input class="textbox__control" id="firstName" type="text" />\n    </span>\n</span>\n',phoneInput=()=>'\n<span class="phone-input">\n    <span class="listbox-button listbox-button--form">\n    <button class="btn btn--form btn--split-start" aria-expanded="false" aria-haspopup="listbox" type="button"\n        data-listbox-button-prefix="Country: " aria-label="Country: United States of America (+1)">\n        <span class="btn__cell">\n        <span class="btn__text">\n            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">\n            <use href="#flag-us"></use>\n            </svg>\n        </span>\n        <svg class="icon icon--chevron-down-12" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-chevron-down-12"></use>\n        </svg>\n        </span>\n    </button>\n    <div class="listbox-button__listbox">\n        <div class="listbox-button__options" role="listbox">\n        <div class="listbox-button__option" role="option">\n            <span class="listbox-button__value">\n            <svg class="flag flag--al" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="355">\n                <use href="#flag-al"></use>\n            </svg>\n            <span>Albania</span>\n            <span>(+355)</span>\n            </span>\n            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-tick-16"></use>\n            </svg>\n        </div>\n        <div class="listbox-button__option" role="option">\n            <span class="listbox-button__value">\n            <svg class="flag flag--in" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="91">\n                <use href="#flag-in"></use>\n            </svg>\n            <span>India</span>\n            <span>(+91)</span>\n            </span>\n            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-tick-16"></use>\n            </svg>\n        </div>\n        <div class="listbox-button__option" role="option">\n            <span class="listbox-button__value">\n            <svg class="flag flag--sh" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="290">\n                <use href="#flag-sh"></use>\n            </svg>\n            <span>Saint Helena, Ascension and Tristan da Cunha</span>\n            <span>(+290)</span>\n            </span>\n            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-tick-16"></use>\n            </svg>\n        </div>\n        <div class="listbox-button__option" role="option">\n            <span class="listbox-button__value">\n            <svg class="flag flag--gb" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="44">\n                <use href="#flag-gb"></use>\n            </svg>\n            <span>United Kingdom</span>\n            <span>(+44)</span>\n            </span>\n            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-tick-16"></use>\n            </svg>\n        </div>\n        <div class="listbox-button__option" role="option" aria-selected="true">\n            <span class="listbox-button__value">\n            <svg class="flag flag--us" focusable="false" height="18" width="24" aria-hidden="true" data-country-code="1">\n                <use href="#flag-us"></use>\n            </svg>\n            <span>United States of America</span>\n            <span>(+1)</span>\n            </span>\n            <svg class="icon icon--tick-16" focusable="false" height="10" width="14" aria-hidden="true">\n            <use href="#icon-tick-16"></use>\n            </svg>\n        </div>\n        </div>\n    </div>\n    </span>\n    <span class="field floating-label">\n    <label class="floating-label__label" for="field1"><span class="clipped">Area code + </span>Phone\n        Number</label>\n        <span class="textbox">\n        <span id="floating-phone-prefix-0">+1</span>\n        <input class="textbox__control" type="tel" aria-label="area code + phone number"\n            autocomplete="tel-national" aria-describedby="floating-phone-prefix-0"/>\n        </span>\n    </span>\n</span>\n',__namedExportsOrder=["base","RTL","value","placeholder","disabledTextbox","invalidTextbox","invalidTextboxWithValue","invalidTextboxWithPlaceholder","longText","longTextInline","select","selectInline","selectInlineDoubled","RTLSelectInline","TextArea","textSpacing","phoneInput"]}}]);