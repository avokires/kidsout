import React from 'react';
import { Link } from "react-router-dom"
import Icon from './../Icon';

const ChatHeader = props => {
    const { profile } = props;
    return (
        <div className="chat-header centered">
            <h3 className="chat-header__sender">{profile.name}</h3>
            {profile.isOnline &&
                <span className="status status--online">В сети</span>
            }
            {!profile.isOnline &&
                <span className="status status--offline">Не в сети</span>
            }
            <div className="chat-header__profile">
                <Link to='/'>Профиль ситтера</Link>
                <a><Icon className="svg-icon" iconName="icon-star" /></a>
            </div>
        </div>
    );
};

export default ChatHeader;