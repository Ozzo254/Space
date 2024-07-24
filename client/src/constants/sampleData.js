import myAvatar from '../assets/me.jpg'
// import Chat from '../Pages/Chat';

export const sampleChats = [
    {
    avatar: [myAvatar],
    name: 'M33k Rews',
    _id: "1",
    groupChat: "false",
    members: ["1", "2"],
    },

    {
    avatar: [myAvatar],
    name: 'Zippy Tabs',
    _id: "2",
    groupChat: "false",
    members: ["1", "2"],
    },
    // {
    //     avatar: [myAvatar,
    //          "https://www.w3schools.com/howto/img_avatar.png", 
    //          myAvatar, 
    //          "https://www.w3schools.com/howto/img_avatar.png", ],
    //     name: 'Space X',
    //     _id: "3",
    //     groupChat: true,
    //     members: ["1", "2"],
    //     },
];

export const sampleUsers = [
    {
        avatar: [myAvatar],
        name: 'M33k Rews',
        _id: "1",
        },
    
        {
        avatar: [myAvatar],
        name: 'Zippy Tabs',
        _id: "2",
        },
]

export const sampleNotifications = [
    {
        sender: {
            avatar: [myAvatar],
            name: 'M33k Rews',
        },
        _id: "1",
    },

    {
        sender: {
            avatar: [myAvatar],
            name: 'M33k Rews',
        },
        _id: "2",
    },

];

export const sampleMessage = [
    {
        attachments: [
            {
                public_id: "asdsad",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "L*uda Ka Message Hai",
        _id: "aojdjiaiIaimc",
        sender: {
            _id: "user.id",
            name: "chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },

    {
        attachments: [
            {
                public_id: "asdsad2",
                url: "https://www.w3schools.com/howto/img_avatar.png"
            },
        ],
        content: "L*uda 2 Ka Message Hai",
        _id: "aojdjiaiIaimc",
        sender: {
            _id: "asdsaddfe",
            name: "chaman2",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
];