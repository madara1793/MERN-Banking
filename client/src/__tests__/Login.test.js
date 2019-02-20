import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Auth/Login/Login';
import renderer from 'react-test-renderer';

describe('Login Component', () => {
  it("renders without crashes", () => {
    const tree = renderer.create(<Login />).toJSON();
    expect(tree).toMatchSnapshot();
  });

})