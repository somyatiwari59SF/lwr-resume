import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./hobby.html";
class Hobbies extends LightningElement {
  constructor(...args) {
    super(...args);
    this.hobbies = [{
      name: 'Photographic Pursuits',
      description: 'An avid shutterbug, I find joy in freezing moments to create eternal memories. From landscapes to portraits, every shot tells a story.',
      interestLevel: 'High',
      years: 10,
      relatedLink: 'https://instagram.com/Shutterified'
    }, {
      name: 'Car Adventures',
      description: 'The road often calls out to me. Traveling by car, I relish the thrill of discovering uncharted territories and the serenity of scenic routes.',
      interestLevel: 'High',
      years: 4
    }, {
      name: 'Tech Exploration',
      description: 'A curious tech enthusiast, I\'m constantly diving into the latest advancements and innovations, always eager to unravel the next big thing in technology.',
      interestLevel: 'High',
      years: 12
    }];
  }
  /*LWC compiler v3.0.0*/
}
_registerDecorators(Hobbies, {
  track: {
    hobbies: 1
  }
});
export default _registerComponent(Hobbies, {
  tmpl: _tmpl,
  sel: "resume-hobby",
  apiVersion: 59
});