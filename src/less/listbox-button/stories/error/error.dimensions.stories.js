export default { title: "Skin/Listbox Button/Error/Dimensions" };

export const fluid = () => `
<span class="listbox-button listbox-button--fluid listbox-button--error">
    <button class="btn btn--form" aria-expanded="true" aria-haspopup="listbox">
        <span class="btn__cell">
                <span class="btn__label">Color: </span>
                <span class="btn__text">Red</span>
            <svg class="icon icon--chevron-down-12" focusable="false" height="8" width="8" aria-hidden="true">
                <use href="#icon-chevron-down-12"></use>
            </svg>
        </span>
    </button>
    <div class="listbox-button__listbox">
        <div class="listbox-button__options" role="listbox">
            <div class="listbox-button__option" role="option" aria-selected="true">
                <span class="listbox-button__value">Red</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Blue</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Yellow</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
            <div class="listbox-button__option" role="option">
                <span class="listbox-button__value">Green</span>
                <svg class="icon icon--tick-16" focusable="false" height="8" width="8">
                    <use href="#icon-tick-16"></use>
                </svg>
            </div>
        </div>
    </div>
</span>
`;
