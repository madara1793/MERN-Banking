import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import Login from '../components/Auth/Login/Login';
import renderer from 'react-test-renderer'

describe('Login', () => {
  it("renders without crashes", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});