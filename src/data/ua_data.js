export const ua_data = {
    contactsData: [
        {
            dataType: 'schedule',
            title: 'Графік роботи',
            weekdays: 'Понеділок-Пʼятниця:',
            weekdaysTime: '3:00 - 21:00',
            weekends: 'Субота-Неділя:',
            weekendsTime: 'Вихідний',
        },
        {
            dataType: 'address',
            title: 'Адреса',
            city: 'Місто Київ',
            street: 'вул. Київська, буд. 2233',
        },
        {
            dataType: 'phone',
            title: 'Телефони',
            phones: [
                {
                    operator: 'Київстар',
                    phoneNumbers: ['+3(123)456-78-90', '+3(123)456-78-90'],
                },
                { operator: 'Lifecell', phoneNumbers: ['+3(321)456-78-90'] },
            ],
        },
        {
            dataType: 'email',
            title: 'Електронна пошта',
            emailAddress: ['gmail@gmail.com', 'gmail2@gmail.com'],
        },
        {
            dataType: 'social',
            title: 'Соціальні мережі',
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
    ],
    footerData: {
        dataType: 'author',
        name: 'by H3M3l1n@2023',
        text: 'Будь-яке використання або копіювання матеріалів чи підбірки матеріалів сайту, елементів дизайну та оформлення дозволяється лише з дозволу правовласника.',
    },
};
