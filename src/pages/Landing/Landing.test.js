import React from 'react';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import Landing from './Landing.page';
import CardItem from '../../components/CardItem';

test('Loads and display title', () => {
    const { getByText } = render(<Landing />);
    expect(getByText('Wizeline React Bootcamp')).toBeInTheDocument;
});

test('Renders the cards as child components', () => {
    const wrapper = shallow(<Landing />);
    expect(wrapper.containsMatchingElement(<CardItem />)).toEqual(true);
})




