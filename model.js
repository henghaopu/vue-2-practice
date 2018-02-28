let data = {
    className: 'color-red',
    title: 'Now the title is being set through JavaScript.',
    isLoading: 'false',
    isDisabled: 'false' 
};

let mToggleClass = function () {
    this.isLoading = true;
};

let mResetToggleMe = function () {
    this.isLoading = false;
}

let mDisaableBtn = function () {
    this.isDisabled = true;
}