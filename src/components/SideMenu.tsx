import * as React from "react";
import { connect } from "react-redux";

import { Icon, Menu } from 'antd';
import { handleFetchAthletes } from "../reduxCore/actions/athleteActions";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface SideMenuInterface {
  loadAthletes: () => void;
}

const SideMenu: React.SFC<SideMenuInterface> = (props) => {

  /*
   * a helper function handles react click event
   * to load initial data.
   * doing so avoid inline binding in JSX code,
   * witch may have performance issue.
   */
  const loadAthletes = () => {
    props.loadAthletes();
  };

  return (
    <Menu
      defaultSelectedKeys={[ '1' ]}
      defaultOpenKeys={[ 'sub1' ]}
      mode="inline"
    >
      <SubMenu key="sub1" title={<span><Icon type="mail"/><span>Managing Athletes</span></span>}>
        <MenuItemGroup key="g1">
          <Menu.Item key="1" onClick={loadAthletes}>Load Athletes</Menu.Item>
          <Menu.Item>...</Menu.Item>
        </MenuItemGroup>
      </SubMenu>

    </Menu>
  )
};

/**
 * map basic athletes data from state to props.
 * @param state
 */
const mapStateToProps = (state: any) => {
  return {};
};

/**
 * map dispatch functions to props.
 * @param dispatch
 */
const mapDispatchToProps = (dispatch: any) => {
  return ({
    loadAthletes: () => {
      dispatch(handleFetchAthletes)
    }
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
