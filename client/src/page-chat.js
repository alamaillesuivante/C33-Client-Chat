import * as api from './chat-api.js';
new Vue({
    el: '#app',
    data: {
        messages: [],
        membersConnect: []
    },
    methods: {
        /* NO TOUCH */
        async sendMessage(evt) { /* NO TOUCH */
            api.sendMessage(evt, this.$refs.el) /* NO TOUCH */
        },
        /* NO TOUCH */
        signout() { /* NO TOUCH */
            api.signout() /* NO TOUCH */
        },
        /* NO TOUCH */
        /* FIN NO TOUCH */
        // Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
        async newMessage(fromUser, message, isPrivate) {
            console.log(fromUser, message, isPrivate);
            this.messages.push({ Utilisateur: fromUser, Message: message, Privacy: isPrivate })
        },
        // À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
        // connectés dans votre interface.
        memberListUpdate(members) {
            console.log(members);
            this.membersConnect = members
        }
    },
    /* NO TOUCH */
    mounted() { /* NO TOUCH */
        api.registerCallbacks(this.newMessage, this.memberListUpdate); /* NO TOUCH */
        api.chatMessageLoop(); /* NO TOUCH */
    } /* NO TOUCH */
    /* FIN NO TOUCH */
})