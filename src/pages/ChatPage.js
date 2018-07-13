import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import moment from 'moment-timezone';
import ChatHeader from './../components/Chat/ChatHeader';
import ChatDayMessage from './../components/Chat/ChatDayMessage';
import uuid from 'uuid';

import { messageSend, messageDelete, messageResend } from './../store/chat/actions';

import leftSidebar from './../img/leftSidebar.png'

class ChatPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            arParseMessages: '',
        }
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSendMessage = this.onSendMessage.bind(this);
        this.onResendMessage = this.onResendMessage.bind(this);
        this.onDeleteMessage = this.onDeleteMessage.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.messageList !== this.props.messageList) {
            this.parseMessages();
        }
        this.scrollToBottom();
    }

    componentDidMount() {
        this.parseMessages();
    }

    scrollToBottom() {
        const node = ReactDOM.findDOMNode(this.messagesContainer);
        const nodeForm = ReactDOM.findDOMNode(this.formContainer);
        console.log('node: ', node);
        console.log('nodeForm: ', nodeForm);

        if (node && nodeForm) {
            setTimeout(() => {
                node.scrollTop = node.scrollHeight + nodeForm.scrollHeight;
            }, 10);
        }
    }

    onSendMessage() {
        const { message } = this.state;
        const { sendMessage, profile } = this.props;

        if (!profile) { return null }

        const newMessage = {
            id: uuid.v4(),
            sender_user: profile.id,
            sender_role: profile.role,
            message: [message],
            recepient_user: '789123',
            created_at: moment().tz('UTC').format('YYYY-MM-DDTHH:mm:ss.SSSS[00Z]'),
        }
        sendMessage(newMessage);
        this.setState({ message: '' });
    }

    onDeleteMessage(message) {
        const { deleteMessage } = this.props;
        const id = message.target.dataset.id;
        deleteMessage(id);
    }

    onResendMessage(message) {
        const { resendMessage } = this.props;
        const id = message.target.dataset.id;
        resendMessage(id);
    }

    onMessageChange(event) {
        const { target } = event;
        const message = target.value;
        this.setState({ message });
    }

    parseMessages() {
        const { messageList } = this.props;

        const arDate = Object.keys(messageList);
        let arParseMessages = {};

        arDate.map(date => {
            const parseDate = moment(date).format('YYYY MM DD');

            return arParseMessages = {
                ...arParseMessages,
                [parseDate]: [
                    ...arParseMessages[parseDate] || [],
                    messageList[date]
                ],
            }
        });

        this.setState({ arParseMessages });
    }

    renderBody() {
        const { profile, clients } = this.props;
        const { arParseMessages } = this.state;
        return (
            <div className="chat__body" ref={messagesContainer => { this.messagesContainer = messagesContainer; }}>
                {Object.values(arParseMessages).map((dayMessages, idx) => {
                    return <ChatDayMessage
                        dayMessages={dayMessages}
                        key={idx}
                        profile={profile}
                        clients={clients}
                        onDeleteMessage={(id) => this.onDeleteMessage(id)}
                        onResendMessage={(id) => this.onResendMessage(id)} />
                })}
            </div>
        );
    }

    renderForm() {
        const { message } = this.state;
        return (
            <div className="chat__form" ref={formContainer => { this.formContainer = formContainer; }}>
                <div className="row container">
                    <div className="col-3" />
                    <div className="col-9">
                        <div className="row chat__form__container">
                            <div className="col-10">
                                <div className="chat__form-wrap">
                                    <div className="chat__form__message-copy">{message}{'\n'}</div>
                                    <textarea placeholder="Сообщение" value={message} onChange={this.onMessageChange} />
                                </div>
                            </div>
                            <div className="col-2">
                                <button className="chat__form__btn" onClick={this.onSendMessage}>Отправить</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        const { profile } = this.props;
        const { arParseMessages } = this.state;

        if (!arParseMessages) { return null };

        return (
            <div className="container container--main container--space">
                <div className="chat-header">
                    <div className="row container">
                        <div className="col-3">
                            <div className="chat-users__header"></div>
                        </div>
                        <div className="col-9">
                            <ChatHeader profile={profile} />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3">
                        <div className="chat-sidebar">
                            <img src={leftSidebar} alt="leftSidebar" width="100%"/>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="chat">
                            {this.renderBody()}
                            {this.renderForm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { messageList, profile, clients } = state;
    return {
        messageList,
        profile,
        clients,
    };
};

const mapDispatchToProps = dispatch => ({
    sendMessage: value => dispatch(messageSend(value)),
    deleteMessage: id => dispatch(messageDelete(id)),
    resendMessage: id => dispatch(messageResend(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);