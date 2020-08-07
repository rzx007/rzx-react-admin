import React, { Component } from 'react';
import avatar from "@/assets/avatar.png";
import { MenuFoldOutlined, MenuUnfoldOutlined, LogoutOutlined } from '@ant-design/icons';
import { isMobile } from "@/utils/mediaQuery";
import ColorPick from "@/widgets/ColorChoose";
import "./index.less"
class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }
  componentDidMount() {
    console.log('isMobile:' + isMobile);
    if (isMobile) {
      this.setState({
        open: false
      })
      this.props.trigger(this.state.open)
    }
  }
  trigger = () => {
    this.setState({
      open: !this.state.open
    })
    return this.props.trigger(this.state.open)
  }
  logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/Login";
  }
  render() {
    let menuButton;
    if (this.state.open) {
      menuButton = <MenuFoldOutlined className="menu-trigger" />;
    } else {
      menuButton = <MenuUnfoldOutlined className="menu-trigger" />;
    }
    return (
      <div className='nav-bar'>
        <ul className="nav">
          <li className="nav-item"
            onClick={() => this.trigger()}>
            {/* <i className={`iconfont menu-trigger ${this.state.open ? '' : 'isClose'}`}>&#xe6ae;</i> */}
            {menuButton}
          </li>

        </ul>
        <ul className="nav left-auto">
          <li className="nav-item"><i className="iconfont">&#xe6ab;</i></li>
          {/* <li className="nav-item"><i class="iconfont">&#xe6a8;</i></li> */}
          <li className="nav-item">
            <span className="avatar">
              <img src={avatar} alt="" />
            </span>
            <span className="user-name">Darius</span>
            <span className="alert-num">13 </span>
            <i className="iconfont">&#xe6a6;</i>
          </li>
          <li className="nav-item">
            <ColorPick />
          </li>
          <li className="nav-item">
            <LogoutOutlined title={"退出登录"} className="user-name" onClick={() => this.logout()} />
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;