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
                            date: '10/01/2020 15:30:55',
                            text: 'Have you taken dog for a walk?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Remember feeding him',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
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
                            date: '20/03/2020 16:30:00',
                            text: 'Hi, how are you?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Fine thanks! Shall we meet tonight?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
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
                            date: '28/03/2020 10:10:40',
                            text: 'Marianne goes to countryside',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Are you sure this is the right chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
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
                            date: '10/01/2020 15:30:55',
                            text: 'Do you know that a new pizzeria has opened?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Yes, but I prefer going to the cinema',
                            status: 'received'
                        }
                    ],
                },
            ],
            activeContact : 0,
            newMessage: ""
        },
        methods: {
            selectContact: function(newContact) { //--> focus on clicked contact
                this.activeContact = newContact;
            },
            newText: function() { //--> add new message with current date
                if (this.newMessage.length > 0) {
                    this.contacts[this.activeContact].messages.push(
                        {
                            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                            text: this.newMessage,
                            status: 'sent'
                        }
                    );
                    setTimeout(() => {
                        this.contacts[this.activeContact].messages.push(
                            {
                                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                                text: "Ok",
                                status: 'received'
                            }
                        );
                    }
                    ,1000);
                }
                this.newMessage = "";
            }
        }

    }
);