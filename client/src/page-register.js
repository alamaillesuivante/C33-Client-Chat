import {register} from './chat-api.js';

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this);
    }
})
