import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    inputMessage = '';
    childMessage = '';

    handleInputChange(event) {
        this.inputMessage = event.target.value;
    }

    handleButtonClick() {
        this.childMessage = this.inputMessage;
    }
}
