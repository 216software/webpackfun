import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}


export default function matt () {

    console.debug("Inside matt, arguments are", arguments);

}


document.body.appendChild(component());
