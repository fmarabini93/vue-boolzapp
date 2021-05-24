const app = new Vue(
    {
        el:"#root",
        data: {
            contacts: [
                {
                    name: 'Michael',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '05/10/2021 15:30:55',
                            text: 'Have you taken dog for a walk?',
                            status: 'sent'
                        },
                        {
                            date: '05/10/2021 15:50:00',
                            text: 'Remember feeding him',
                            status: 'sent'
                        },
                        {
                            date: '05/10/2021 16:15:22',
                            text: 'All done!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '04/20/2021 16:30:00',
                            text: 'Hi, how are you?',
                            status: 'sent'
                        },
                        {
                            date: '04/20/2021 16:30:55',
                            text: 'Fine thanks! Shall we meet tonight?',
                            status: 'received'
                        },
                        {
                            date: '04/20/2021 16:35:00',
                            text: 'I would really like to, but sadly I have to go to grocery',
                            status: 'sent'
                        }
                    ],
                },     
                {
                    name: 'Samuel',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '03/28/2021 10:10:40',
                            text: 'Marianne goes to countryside',
                            status: 'received'
                        },
                        {
                            date: '03/28/2021 10:20:10',
                            text: 'Are you sure this is the right chat?',
                            status: 'sent'
                        },
                        {
                            date: '03/28/2021 16:15:22',
                            text: 'Ah, sorry!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Louis',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '02/10/2021 15:30:55',
                            text: 'Do you know that a new pizzeria has opened?',
                            status: 'sent'
                        },
                        {
                            date: '02/10/2021 15:50:00',
                            text: 'Yes, but I prefer going to the cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'John',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '01/12/2021 15:30:55',
                            text: 'Waiting you to the party tonight!',
                            status: 'received'
                        },
                        {
                            date: '01/12/2021 15:50:00',
                            text: 'Sure, 99% I will be there',
                            status: 'sent'
                        },
                        {
                            date: '01/12/2021 16:15:22',
                            text: 'See you!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Isabel',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '12/27/2020 15:30:55',
                            text: 'My mum feels sick. Going hospital right now',
                            status: 'received'
                        },
                        {
                            date: '12/27/2020 15:50:00',
                            text: 'Ok, waiting for news',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Tom',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '11/07/2020 15:30:55',
                            text: 'Have you seen new Nolan film?',
                            status: 'received'
                        },
                        {
                            date: '11/07/2020 15:50:00',
                            text: 'No! So no spoilers please!',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Philip',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/10/2020 15:30:55',
                            text: 'Will you go to James party?',
                            status: 'sent'
                        },
                        {
                            date: '10/10/2020 15:50:00',
                            text: 'Yes, I think. And you?',
                            status: 'sent'
                        },
                        {
                            date: '10/10/2020 16:15:22',
                            text: 'Maybe, if he invites me!',
                            status: 'received'
                        }
                    ],
                }
            ],
            activeContact : 0,
            search: '',
            newMessageSent: "",
            newMessageReceived: ["Ok", "Hello!", "How are you?", "How's the weather today?", "Please send me a letter", "Remember going to dentist", "Take shoes off when entering home", "Go to grocery", "Fine. thanks", "Wow!"],
            typing: 0
        },
        methods: {
            getRndNum : function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) ) + min;
            },
            selectContact: function(newContact) { //--> focus on clicked contact
                this.activeContact = newContact;
                this.newMessageSent = "";
            },
            newText: function() { //--> add new message with current date
                setTimeout(() => {
                    this.typing = 1;
                },1500);
                if (this.newMessageSent.length > 0) {
                    this.contacts[this.activeContact].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: this.newMessageSent,
                            status: 'sent'
                        }
                    );
                    setTimeout(() => {
                        this.typing = 0;
                        this.contacts[this.activeContact].messages.push(
                            {
                                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                                text: this.newMessageReceived[this.getRndNum(1, 10)],
                                status: 'received'
                            }
                        );
                    },5000);
                }
                this.newMessageSent = "";
            },
            newSmile: function() {
                setTimeout(() => {
                    this.typing = 1;
                },1500);
                if (this.newMessageSent.length == 0) {
                    this.contacts[this.activeContact].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: ":-)",
                            status: 'sent'
                        }
                    );
                    setTimeout(() => {
                        this.typing = 0;
                        this.contacts[this.activeContact].messages.push(
                            {
                                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                                text: ":-)",
                                status: 'received'
                            }
                        );
                    },5000);
                } else {
                    this.newMessageSent += " :-)";
                }
            },
            filterContacts: function() {
                for (let i = 0; i < this.contacts.length; i++) {
                    this.contacts[i].visible = true;
                    if (!this.contacts[i].name.toLowerCase().startsWith(this.search.toLowerCase())) {
                        this.contacts[i].visible = false;
                    }
                }
            }
        }
    }
);