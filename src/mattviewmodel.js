"use strict";

import ko from "knockout";

function MattViewModel() {

    console.debug("Inside MattViewModel...");

    var self = this;
    self.type = "MattViewModel";

    self.age = ko.observable();

    self.first_name = ko.observable();
    self.last_name = ko.observable();

    self.display_name = ko.computed(function () {
        return self.first_name() + " " + self.last_name();
    });

};

function Car(a, b, c) {
    console.debug("Inside Car...");
    this.a = a;
    this.b = b;
    this.c = c;
};

export {MattViewModel};
