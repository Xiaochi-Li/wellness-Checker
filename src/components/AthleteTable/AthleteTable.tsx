import {Table} from "antd";
import * as React from 'react';
import {connect} from "react-redux";

import {AssociatedAtheists} from "../../utils/DataShape";

interface AthleteTableInterface {
  athletes: AssociatedAtheists[];
}

/**
 * Page Header bar
 */
const AthleteTable: React.SFC<AthleteTableInterface> = (props) => {
  console.log(props.athletes);

  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Muscle Soreness',
    dataIndex: 'muscleSoreness',
  }, {
    title: 'Sleep Quality',
    dataIndex: 'sleepQuality',
  }];

  const data = props.athletes;

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered={true}
    />
  )
};

/**
 * map basic athletes data from state to props.
 * @param state
 */
const mapStateToProps = (state: any) => {
  return {athletes:state.athleteReducer.athletes};
};

export default connect(mapStateToProps)(AthleteTable);
