
const chatApi = {
    chatUsers: [
        {
            id: 1,
            name: "Ben Blocker",
            avatar: "http://emilcarlsson.se/assets/harveyspecter.png",
            online: true,
            unreadMessage: 2,
            incommingMessages: ['Hi', 'How are you?'],
            outgoingMessages: ["I'am", 'How are you?']
        },
        {
            id: 2,
            name: "Dave Defender",
            avatar: "http://emilcarlsson.se/assets/louislitt.png",
            online: false,
            unreadMessage: 1,
            incommingMessages: ['Hello', 'How are you?'],
            outgoingMessages: ['Hi', 'How are you?']
        },
        {
            id: 3,
            name: "Sam Sweeper",
            avatar: "http://emilcarlsson.se/assets/rachelzane.png",
            online: true,
            unreadMessage: 0,
            incommingMessages: ["I'am", 'How are you?'],
            outgoingMessages: ['Hello', 'Come on']
        },
        {
            id: 4,
            name: "Matt Midfielder",
            avatar: "http://emilcarlsson.se/assets/donnapaulsen.png",
            online: true,
            unreadMessage: 5,
            incommingMessages: ['Cool', 'Fine'],
            outgoingMessages: ['Exellent!', "Let's go" ]
        },
        {
            id: 5,
            name: "William Winger",
            avatar: "http://emilcarlsson.se/assets/jessicapearson.png",
            online: false,
            unreadMessage: 4,
            incommingMessages: ['Exellent!', "Let's go" ],
            outgoingMessages: ['Hi', 'How are you?']
        },
        {
            id: 6,
            name: "Fillipe Forward",
            avatar: "http://emilcarlsson.se/assets/haroldgunderson.png",
            online: false,
            unreadMessage: 0,
            incommingMessages: ['Hello', 'Come on'],
            outgoingMessages: ['Cool', 'Fine']
        }
    ],
    all: function() {return this.chatUsers},
    getUser: function(id) {
        const isUser = user => user.id === +id;
        return this.chatUsers.find(isUser);
    }
}

export default chatApi