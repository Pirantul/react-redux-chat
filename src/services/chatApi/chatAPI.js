
const chatApi = {
    chatUsers: [
        {
            id: 1,
            name: "Ben Blocker",
            avatar: "http://emilcarlsson.se/assets/harveyspecter.png",
            online: true,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'Hi',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Hi, my friend.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'How are you?',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'I am fine',
                read: true
            }]
        },
        {
            id: 2,
            name: "Dave Defender",
            avatar: "http://emilcarlsson.se/assets/louislitt.png",
            online: false,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'Hello',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Hi.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'I have a message from you',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Come on',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Yes',
                read: true
            }]
        },
        {
            id: 3,
            name: "Sam Sweeper",
            avatar: "http://emilcarlsson.se/assets/rachelzane.png",
            online: true,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'Hi',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Hi, my friend.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'I am good',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Cool',
                read: true
            }]
        },
        {
            id: 4,
            name: "Matt Midfielder",
            avatar: "http://emilcarlsson.se/assets/donnapaulsen.png",
            online: true,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'How do you do',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'fine.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'Exellent!',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: "I want to talk whith you",
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: "Let's go",
                read: true
            }]
        },
        {
            id: 5,
            name: "William Winger",
            avatar: "http://emilcarlsson.se/assets/jessicapearson.png",
            online: false,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'Hi, my friend',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Hello.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'How are you?',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: "Let's go",
                read: true
            }]
        },
        {
            id: 6,
            name: "Fillipe Forward",
            avatar: "http://emilcarlsson.se/assets/haroldgunderson.png",
            online: false,
            messages: [{
                timestamp: '',
                direction: 'incomming',
                text: 'Hi',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'Hi, my friend.',
                read: true
            }, {
                timestamp: '',
                direction: 'incomming',
                text: 'How are you?',
                read: true
            }, {
                timestamp: '',
                direction: 'outgoing',
                text: 'I am fine',
                read: true
            }]
        }
    ],
    all: function () { return this.chatUsers },
    getUser: function (id) {
        const isUser = user => user.id === +id;
        return this.chatUsers.find(isUser);
    },
    getMessageCount: function (id) {
        const isUser = user => user.id === +id;
        const user = this.chatUsers.find(isUser);
        return user.messages.length;
    },
    getUserMessages: function (id) {
        const isUser = user => user.id === +id;
        const user = this.chatUsers.find(isUser);
        return user.messages;
    }
}

export default chatApi