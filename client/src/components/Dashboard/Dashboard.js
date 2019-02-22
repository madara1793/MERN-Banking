import React, { Component } from "react";
import styled from 'styled-components';
import MyAreaChart from '../Charts/MyAreaChart';

export default class Dashboard extends Component {
  render() {
    return (
      <PanelWrapper>
        <MyAreaChart/>
      </PanelWrapper>
    );
  }
}

const PanelWrapper = styled.div`


`;