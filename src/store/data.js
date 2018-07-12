// дата приходив в формате utc

const data = {
    messageList: {
        '2018-07-06T13:19:21.451000Z': {
            id: 1,
            sender_user: '789123',
            sender_role: 'client',
            message: ['Скажите свой номер телефона'],
            recepient_user: '123456',
            created_at: '2018-07-06T13:19:21.451000Z',
            isError: false,
            isReaded: true,
        },
        '2018-07-06T13:19:30.451000Z': {
            id: 2,
            sender_user: '123456',
            sender_role: 'operator',
            message: ['Отправьте запрос, пожалуйста :)', 'Вот мой номер 8 968 785 25 11 на всякий случай, Салли'],
            recepient_user: '789123',
            created_at: '2018-07-06T13:19:30.451000Z',
            isError: false,
            isReaded: false,
        },
        '2018-07-06T13:19:31.451000Z': {
            id: 3,
            sender_role: 'system',
            message: ['Принял(а) заказ на 22 сентября 17:00-23:00'],
            created_at: '2018-07-06T13:19:31.451000Z',
        },
        '2018-07-11T13:10:30.451000Z': {
            id: 4,
            sender_user: '123456',
            sender_role: 'operator',
            message: ['Спасибо!'],
            recepient_user: '789123',
            created_at: '2018-07-11T13:10:30.451000Z',
            isError: false,
            isReaded: true,
        },
        '2018-07-11T13:11:21.451000Z': {
            id: 5,
            sender_user: '789123',
            sender_role: 'client',
            message: ['и мой: + 7 916 553 4621', 'Салли, сорри, театр отменился. Но с удовольствием позовем вас в четверг в это же время. Вы сможете?', 'Жаль :('],
            recepient_user: '123456',
            created_at: '2018-07-11T13:11:21.451000Z',
            isError: false,
            isReaded: true,
        },
        '2018-07-11T13:12:00.451000Z': {
            id: 6,
            sender_user: '123456',
            sender_role: 'operator',
            message: ['Нет, к сожалению, не могу в четверг'],
            recepient_user: '789123',
            created_at: '2018-07-11T13:12:00.451000Z',
            isError: false,
            isReaded: false,
        },
        '2018-07-11T13:12:01.451000Z': {
            id: 7,
            sender_user: '123456',
            sender_role: 'operator',
            message: ['Нет, к сожалению, не могу в четверг'],
            recepient_user: '789123',
            created_at: '2018-07-11T13:12:01.451000Z',
            isError: false,
            isReaded: false,
            isSending: true,
        },
        '2018-07-11T13:12:02.451000Z': {
            id: 8,
            sender_user: '123456',
            sender_role: 'operator',
            message: ['Нет, к сожалению, не могу в четверг'],
            recepient_user: '789123',
            created_at: '2018-07-11T13:12:02.451000Z',
            isError: true,
            isReaded: false,
            isSending: false,
        },
        '2018-07-11T13:13:02.451000Z': {
            id: 9,
            sender_role: 'system',
            message: ['Произошла ошибка, попробуйте отправить заказ еще раз'],
            created_at: '2018-07-11T13:13:02.451000Z',
            isError: true,
        },
    },

    clients: {
        '789123': {
            name: 'Сергей П',
            photo: '/avatar2.png',
            isOnline: true,
        }
    },

    orders: {
        'order789123': {
            created_at: '2018-07-06T13:19:30.451000Z',
            deadline: '22 сентября 17:00-23:00',
            babysitter: '123456',
            client: '789123',
            id: 'order789123',
            status: 'error',
        },
        'order123456': {
            created_at: '2018-07-06T13:19:29.451000Z',
            deadline: '22 сентября 17:00-23:00',
            babysitter: '123456',
            client: '789123',
            id: 'order123456',
            status: 'agreed',
        },
    },

    profile: {
        id: '123456',
        name: 'Светлана',
        photo: '/avatar.png',
        role: 'opearator',
        isOnline: true,
    },
};


export { data };
