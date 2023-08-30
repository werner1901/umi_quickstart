import React, { FC } from 'react';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined} from '@ant-design/icons';
import { history } from 'umi';
import type { MenuProps } from 'antd';

const Header:FC<{}> = () => {
  const items=[{
    label: 'Users',
    key: '/',
    icon: <MailOutlined />,
  },
  {
    label: '404',
    key: '/404',
    icon: <AppstoreOutlined />,
  }]
  const onClick: MenuProps['onClick'] = (e) => {
    history.push(e.key)
  }
  return( <Menu mode="horizontal" items={items} onClick={onClick} />)
}

export default Header