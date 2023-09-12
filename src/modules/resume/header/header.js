import { LightningElement } from 'lwc';
import '@lwc/synthetic-shadow';
export default class HelloWorldApp extends LightningElement {
    handleClick(event){
        const button = event.currentTarget.dataset.button;
        console.log(button);
        if (button === "desktopView") {
            this.dispatchEvent(new CustomEvent("printviewtoggle"));
        }
    }
}
