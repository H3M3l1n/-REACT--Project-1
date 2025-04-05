export const ru_contactsdata = [
    {
        dataType: 'schedule',
        title: 'График работы',
        weekdays: 'Понедельник-Пятница:',
        weekdaysTime: '3:00 - 21:00',
        weekends: 'Суббота-Воскресенье:',
        weekendsTime: 'Выходной',
    },
    {
        dataType: 'address',
        title: 'Адрес',
        city: 'Город Киев',
        street: 'ул. Киевская, д. 2233',
    },
    {
        dataType: 'phone',
        title: 'Телефоны',
        phones: [
            {
                operator: 'Киевстар:',
                phoneNumbers: ['+3(123)456-78-90', '+3(123)456-78-90'],
            },
            { operator: 'Lifecell:', phoneNumbers: ['+3(321)456-78-90'] },
        ],
    },
    {
        dataType: 'email',
        title: 'Электронная почта',
        emailAddress: ['gmail@gmail.com', 'gmail2@gmail.com'],
    },
    {
        dataType: 'social',
        title: 'Социальные сети',
        socials: [
            {
                title: 'Telegram',
                socialData: [
                    {
                        link: 'https://telegram.org/',
                        phoneNumber: '+3(123)456-78-90',
                    },
                    {
                        link: 'https://telegram.org/',
                        phoneNumber: '+3(321)456-78-90',
                    },
                ],
            },
            {
                title: 'Viber',
                socialData: [
                    {
                        link: 'https://viber.com/',
                        phoneNumber: '+3(123)456-78-90',
                    },
                    {
                        link: 'https://viber.com/',
                        phoneNumber: '+3(321)456-78-90',
                    },
                ],
            },
        ],
    },
];
