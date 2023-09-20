import { LightningElement, track } from 'lwc';

export default class DesktopContent extends LightningElement {
    @track candidateInfo = {
        name : "Somya Tiwari",
    }

  get showPrivateInfo() {
    const params = new URLSearchParams(window.location.search);
    for (let param of params) {
        // Decode the parameter value
        let decodedValue;
        try {
            decodedValue = atob(param[0]);
        } catch (e) {
            continue;  // If decoding fails, continue to the next parameter
        }
        if (decodedValue === "showEncryptedData") {
            return true;
        }
    }
    return false;
}
}
