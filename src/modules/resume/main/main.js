import { LightningElement } from 'lwc';
import '@lwc/synthetic-shadow';

export default class Main extends LightningElement {
    format = 'web';  // default to web format

    get printFormat() {
        return this.format === 'print';
    }

    get webFormat() {
        return this.format === 'web';
    }

    get paperClass() {
        return `a4-paper ${this.format}-format`;
    }
    
    toggleFormat() {
        console.log('in toggle Format');
        this.format = this.format === 'print' ? 'web' : 'print';
    }
}
