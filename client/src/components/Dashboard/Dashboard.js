import React, { Component } from "react";
import styled from 'styled-components';
import MyAreaChart from '../Charts/MyAreaChart';
import MyRadarChart from '../Charts/MyRadarChart';
import MyPieChart from '../Charts/MyPieChart';

export default class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
          <PanelWrapper>
              <div className="mb-5">
                <MyAreaChart/>
              </div>
                <div className="d-flex flex-row justify-content-between my-5">
                <MyPieChart/>
                <MyRadarChart/>
              </div>
          </PanelWrapper>
      </React.Fragment>

    );
  }
}

const PanelWrapper = styled.div`


`;