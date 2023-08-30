import React, { FC } from 'react';
import Header from '../Header/index';
import { Button, Popover } from 'antd';

const NotFound: FC<{}> = () => {
  const content = (<div>404</div>)
  return (
    <div>
      <Header></Header>
      <Popover content={content} title="404">
        <Button type="primary">点击我</Button>
      </Popover>
    </div>
  );
};

export default NotFound;
