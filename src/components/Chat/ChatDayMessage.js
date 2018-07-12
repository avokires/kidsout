import React from 'react';
import moment from 'moment-timezone';
import ChatRowMessage from './ChatRowMessage';

const ChatDayMessage = props => {
    const { dayMessages, profile, clients } = props;
    const date = moment(dayMessages[0].created_at).format('LL');
    const isNow = moment(dayMessages[0].created_at).utc().isSame(moment(), 'day');

    return [
        <p className="chat__date" key={date}>{isNow ? 'Сегодня' : date}</p>,
        dayMessages.map((message, idx) => {
            const idMessage = message.created_at;
            return <ChatRowMessage
                key={idx}
                message={message}
                profile={profile}
                clients={clients}
                onDeleteMessage={(idMessage) => props.onDeleteMessage(idMessage)}
                onResendMessage={(idMessage) => props.onResendMessage(idMessage)}
            />
        })
    ]
};

export default ChatDayMessage;