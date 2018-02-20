// import modal from './components/modal.js';
// import './css/style.css';
// let App = function(){
//     var oApp = document.getElementById("app");
//     var oModal = new modal();
//     oApp.innerHTML = oModal.tpl;
// }
// new App();

import modal from './components/modal.js';
import './css/style.css';
let App = function(){
    var oApp = document.getElementById("app");
    var oModal = new modal();
    // oApp.innerHTML = oModal.tpl;
    oApp.innerHTML = oModal.tpl({
        name : 'Sooooup',
        arr : [ '周一', '周二', '周三'],
    });
}
new App();