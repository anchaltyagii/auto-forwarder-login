import React from 'react';
import './Layout.scss';

const Layout = ({ children }: any) => {
  return (
    <div className='layout_container'>
      <div className='layout_children_container'>{children}</div>
    </div>
  );
};

export default Layout;
