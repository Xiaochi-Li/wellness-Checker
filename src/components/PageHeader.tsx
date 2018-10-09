import * as React from 'react';

import { Layout, Menu } from 'antd';

const {Header} = Layout;

interface PageHeaderInterface {
}

/**
 * Page Header bar
 */
export const PageHeader: React.SFC<PageHeaderInterface> = (props) => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[ '1' ]}
        style={{lineHeight: '64px'}}
      >
        <Menu.Item key="1">Wellness Report</Menu.Item>
      </Menu>
    </Header>
  )
};
