import {
  render
} from './renderer.js';
import * as data from './thing.json';

function getThingTemplate(thing) {
  return `<li> ${thing.Name} - ${thing.description}</li>`;
};

console.log(data.Leaders);
function sortMyStuff(first, second){
  if(first.Name > second.Name){
  return 1;
}
else if (first.Name < second.Name){
  return -1;
}
else {
  return 0;
}
}
const things = data.Leaders.sort(sortMyStuff);
let content='<ul>';

for (let i=0; i< things.length; i++){
  console.log(things[i]);
content += getThingTemplate(things[i]);

};

render(content);

const mainView = document.querySelector('#primaryView');

//render(`
//<h2> TESTING TESTING 123 123</h2>
//`);
