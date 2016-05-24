var sub = require('./sub'),
    THREE = require('three');

module.exports = {
    THREE: THREE
}

if(window){
    window.gooey = module.exports;
}

sub.hello();
