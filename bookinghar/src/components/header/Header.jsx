import './header.css'
import {
  faBed,
  faCalendarDays,
  faPerson,
  
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
        </div>
        <>
          <h1 className='headerTitle'>Looking for hotels? Explore Here!</h1>
          <p className='headerDesc'>
            Unlock discounts of 20% ✅ with your first booking.😍
          </p>
          <button className='headerBtn'>Sign in / Register</button>
          <div className='headerSearch'>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faBed} className='headerIcon' />
              <input
                type='text'
                placeholder='Where are you going?'
                className='headerSearchInput'
              />
            </div>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
              <span className='headerSearchText'>Date</span>
            </div>
            <div className='headerSearchItem'>
              <FontAwesomeIcon icon={faPerson} className='headerIcon' />
              <span className='headerSearchText'>Children Parents</span>
            </div>
            <div className='headerSearchItem'>
              <span className='headerSearchBtn'>Search</span>
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Header
