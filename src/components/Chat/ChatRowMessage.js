import React from 'react';
import moment from 'moment-timezone';
import classnames from 'classnames';
import Icon from './../../components/Icon';

const ChatRowMessage = props => {
    const { message, profile, clients } = props;

    const isSender = message.sender_user === profile.id;
    const isRecepient = message.recepient_user === profile.id;
    const isSystem = message.sender_role === "system";
    const isSingle = (message && message.message.length <= 1) || false;
    const time = moment(message.created_at).format('HH:mm');


    if (isSystem) {
        const className = classnames("chat__notice", { 'chat__notice--success': !message.isError, 'chat__notice--danger': message.isError });
        return (
            <p className={className}>
                Принял(а) заказ на 22 сентября 17:00-23:00
                <time className="chat__item__time" dateTime="2007-08-29T14:40Z">{time}</time>
            </p>
        )
    }

    if (isRecepient) {
        return (
            <div className="chat__recepient">
                <div className="chat__item">
                    {clients[message.sender_user].photo &&
                        <img className="chat__item__avatar" src={clients[message.sender_user].photo} alt="avatar" />
                    }
                    <div className={classnames("chat__item__messages", { 'chat__item__messages--single': isSingle })}>
                        {message.message.map((item, idx) => {
                            return <p className="chat__item__message" key={idx}>{item}</p>
                        })}
                    </div>
                    <time className="chat__item__time" dateTime={message.created_at}>{time}</time>
                </div>
            </div>
        )
    }

    if (isSender) {
        const idMessage = message.created_at;
        return (
            <div className="chat__sender">
                <div className="chat__item">
                    <div className={classnames("chat__item__messages", { 'chat__item__messages--single': isSingle })}>
                        {message.message.map((item, idx) => {
                            return <p className="chat__item__message" key={idx}>{item}</p>
                        })}
                    </div>
                    <time className="chat__item__time" dateTime="2007-08-29T14:40Z">{time}</time>
                    {message.isSending &&
                        <span className="chat__item__status">Отправляется…</span>
                    }
                    {message.isReaded && !message.isError && !message.isSending &&
                        <Icon className="svg-icon svg-icon--link" iconName="icon-doublecheck" />
                    }
                    {!message.isReaded && !message.isError && !message.isSending &&
                        <Icon className="svg-icon svg-icon--link" iconName="icon-check" />
                    }
                    {message.isError &&
                        <div className="flex">
                            <Icon
                                className="svg-icon svg-icon--link"
                                iconName="icon-resend"
                                id={idMessage}
                                onClick={(idMessage) => props.onResendMessage(idMessage)}
                            />
                            <Icon
                                className="svg-icon svg-icon--link"
                                iconName="icon-basket"
                                id={idMessage}
                                onClick={(idMessage) => props.onDeleteMessage(idMessage)}
                            />
                            <span className="chat__item__status chat__item__status--error">Не отправлено</span>
                        </div>
                    }
                </div>
            </div>
        )
    }

};

export default ChatRowMessage;