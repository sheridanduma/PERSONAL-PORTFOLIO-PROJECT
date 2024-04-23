class CssPropControl {
    constructor(element){
        this.element = element;
    }
    get(varName) {
        return getComputedStyle(this.element).getPropertyValue(varName);
    }
    set(varName, val) {
        return this.element.style.setProperty(varName, val)
    }
}

const bodyCssProps = new CssPropControl(document.body);

let toggle = document.querySelector('#dark-mode-toggle');

toggle.addEventListener('click', () => {
    let mode
        if(toggle.checked) { 
            mode = 'dark';
        } else {
            mode = 'light';
        };
    bodyCssProps.set('--background', bodyCssProps.get(`--${mode}-background`));
    bodyCssProps.set('--primary', bodyCssProps.get(`--${mode}-primary`));
});