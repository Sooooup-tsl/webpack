var oCalc = require( './calc.js' );
require('style-loader!css-loader!./style.css');

function say() {
    alert('hello world');
}
say();
alert(oCalc.add(10, 20));