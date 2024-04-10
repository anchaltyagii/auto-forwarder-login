import React from 'react';
import auto_forward_bot_icon from '../../assets/Icons/auto_forwarder_bot_logo_icon.jpg';
import './Layout.scss';

const Layout = ({ children }: any) => {
  return (
    <div className='layout_container'>
      <div className='layout_children_container'>
        <div className='icon_heading_container'>
          <img src={auto_forward_bot_icon} alt='' />
          <h2>Auto Forwarder Bot</h2>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
