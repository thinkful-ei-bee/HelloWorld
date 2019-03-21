import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallow} from 'enzyme'
import Tab from './state-drills/Tab'

configure({adapter:new Adapter()})

it('renders empty given no tabs', () => {
  const wrapper = shallow(<Tab />)
})