import { LightningElement, track } from 'lwc';

export default class DesktopContent extends LightningElement {
    @track candidateInfo = {
        name : "Somya Tiwari",
    }
    connectedCallback() {
        document.title = 'Somya Tiwari Resume';    
}
}
