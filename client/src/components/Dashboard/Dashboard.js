import React, { Component } from "react";
import styled from 'styled-components';
import MyAreaChart from '../Charts/MyAreaChart';
import MyRadarChart from '../Charts/MyRadarChart';
import MyPieChart from '../Charts/MyPieChart';

export default class Dashboard extends Component {
  render() {
    return (
          <PanelWrapper>
                <MyAreaChart/>
              <div className="d-flex flex-row justify-content-between mt-5">
                <MyPieChart/>
                <MyRadarChart/>
              </div>
          </PanelWrapper>
    );
  }
}

const PanelWrapper = styled.div`
  background-color: #2f353a;
`;