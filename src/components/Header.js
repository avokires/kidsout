import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import logo from "./../logo.svg";
import classnames from 'classnames';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenProfile: false,
    }
    this.onClickProfile = this.onClickProfile.bind(this);
  }

  onClickProfile() {
    const { isOpenProfile } = this.state;
    this.setState({
      isOpenProfile: !isOpenProfile
    });

    return console.log('hide/show dropdown');
  }

  render() {
    const { photo } = this.props;
    const { isOpenProfile } = this.state;
    console.log('is open profile: ', isOpenProfile);

    return (
      <header className="header">
        <div className="container header__container">
          <Link className="header__logo" to='/'><img src={logo} alt="Logo" /></Link>
          <div className="header__menu">
              <NavLink to="/">Сообщения</NavLink>
              <NavLink to="/">Найти ситтера</NavLink>
              <NavLink to="/">Все ситтеры</NavLink>
          </div>
          <a className={classnames('header__profile', { 'header__profile--active': isOpenProfile })} onClick={this.onClickProfile}>
          <img src={photo} alt="Avatar" />
          </a>
        </div>
      </header>
    );
  }
};

const mapStateToProps = state => {
  const { photo } = state.profile;
  return {
    photo
  };
};


export default connect(mapStateToProps)(Header);

