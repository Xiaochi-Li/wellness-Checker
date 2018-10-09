import { Layout } from 'antd';
import * as React from 'react';

import AthleteTable from "./AthleteTable/AthleteTable";
import { PageHeader } from "./PageHeader";
import SideMenu from "./SideMenu";

const {Content, Sider} = Layout;

/**
 * App components define generate layout of the page
 */
class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Layout>
          <PageHeader/>
          <Layout>
            <Sider>
              <SideMenu/>
            </Sider>
            <Content>
              <AthleteTable/>
            </Content>
          </Layout>
        </Layout>
      </div>);
  }
}

export default App;
