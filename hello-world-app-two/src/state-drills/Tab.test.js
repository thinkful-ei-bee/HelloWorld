import React from 'react'
import ReactDOM from 'react-dom'
import Tab from './Tab'
import renderer from 'react-test-renderer'

describe('Tabs Component',()=>{
  it('renders without error',()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Tab/>,div)
    ReactDOM.unmountComponentAtNode(div)
  })

  const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

  it('renders the first tab by default',()=>{
    const tree = renderer.create(<Tab tabs={tabsProp}/>).toJSON()
    expect(tree).toMatchSnapshot()
  })

})

