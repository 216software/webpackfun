"use strict";

import _ from 'lodash';
import toastr from 'toastr';
import $ from "jquery";
import ko from "knockout";

// This feels totally barbaric, but this import will be read by webpack,
// and then webpack will somehow add a JS wrapper around this stuff.
import 'toastr/build/toastr.min.css';

import {Car, MattViewModel} from "./mattviewmodel";

/*
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
*/


var onready = function () {
    toastr.success("hello!")
    console.debug(MattViewModel);
    console.debug(MattViewModel.type);
    var c1 = new Car("audi", "a4", 2013);
    var mvm = new MattViewModel();
    ko.applyBindings(vm);
};

$(document).ready(onready);
