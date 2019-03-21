import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
import Tab from './state-drills/Tab';
import toJson from 'enzyme-to-json'
import React from 'react'
import ReactDOM from 'react-dom'

configure({adapter:new Adapter()})

describe('Tab Component',()=>{
  const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tab />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tab />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders the first tab by default', () => {
    const wrapper = shallow(<Tab tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('closes the first tab and opens any clicked tab', () => {
    const wrapper = shallow(<Tab tabs={tabsProp} />)
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()


  })

})
