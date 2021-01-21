import {signin} from './chat-api.js';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
});
