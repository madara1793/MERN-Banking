import React, { Component } from "react";
import styled from 'styled-components';
import MyAreaChart from '../Charts/MyAreaChart';
import MyRadarChart from '../Charts/MyRadarChart';

export default class Dashboard extends Component {
  render() {
    return (
      <PanelWrapper>
        <MyAreaChart/>
        <MyRadarChart/>
      </PanelWrapper>
    );
  }
}

const PanelWrapper = styled.div`


`;