import { LightningElement, track } from 'lwc';

export default class Hobbies extends LightningElement {
    @track hobbies = [
        {
          name: "Car Adventures",
          description: "The road often calls out to me. Traveling by car, I relish the thrill of discovering uncharted territories and the serenity of scenic routes. Recently completed an adventurous drive from Kashmir to Kanyakumari.",
          interestLevel: "High",
          years: 4
        },
        {
          name: "Tech Exploration",
          description: "A curious tech enthusiast, I'm constantly diving into the latest advancements and innovations, always eager to unravel the next big thing in technology.",
          interestLevel: "Medium",
          years: 12
        },
        {
          name: "Photographic Pursuits",
          description: "An avid shutterbug, I find joy in freezing moments to create eternal memories. From landscapes to portraits, every shot tells a story.",
          interestLevel: "High",
          years: 10,
          relatedLink: "https://instagram.com/Shutterified"
        }
      ];
}
