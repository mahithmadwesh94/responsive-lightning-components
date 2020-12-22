import { LightningElement } from 'lwc';

export default class ResponsiveComponent extends LightningElement {

    showModal = false;

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }


    showDivhandler() {
        this.showModal = true;
    }

    closeModal() {
        this.showModal = false;
    }
}