import './header.css'
import {
  faBed,
  //   faCalendarDays,
  //   faPerson,
  //   faPlane,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
