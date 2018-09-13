import React from 'react';
import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import ExpenseDashpoardPage from '../../components/ExpenseDashpoardPage';


test('should render ExpenseDashpoardPage correctly', () => {

    const wrapper = shallow(<ExpenseDashpoardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});