import './header.css'
import {
  faBed,
  faCalendarDays,
  faPerson,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range'
import { useState } from 'react'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { format } from 'date-fns'

const Header = ({ type }) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ])
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
      }
    })
  }

  return (
    <div className='header'>
      <div
        className={
          type === 'list' ? 'headerContainer listMode' : 'headerContainer'
        }
      >
        <div className='headerList'>
          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Hotels</span>
          </div>
        </div>
        {type !== 'list' && (
          <>
            <h1 className='headerTitle'>Looking for hotels? Explore Here!</h1>
            <p className='headerDesc'>
              Unlock discounts of 20% ✅ with your first booking.😍
            </p>
            <button className='headerBtn'>Sign in / Register</button>
            <div className='headerSearch'>
              <div className='headerSearchItem-Item1 headerSearchItems'>
                <FontAwesomeIcon icon={faBed} className='headerIcon' />
                <p className='headerText' id='destination'>
                  Destination
                </p>
                <input
                  type='text'
                  placeholder='Where are you going?'
                  className='headerSearchInput'
                />
              </div>
              <div className='headerSearchItem-Item2 headerSearchItems'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
                <p className='headerText'>Check In / Check Out</p>

                <span
                  onClick={() => setOpenDate(!openDate)}
                  className='headerSearchText'
                >{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(
                  date[0].endDate,
                  'MM/dd/yyyy'
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                  />
                )}
              </div>
              <div className='headerSearchItem-Item3 headerSearchItems'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <p className='headerText'>Guests & Rooms</p>

                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className='headerSearchText'
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className='options'>
                    {/* Adult */}
                    <div className='optionsItem'>
                      <span className='optionText'>Adult</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.adult <= 1}
                          onClick={() => handleOption('adult', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.adult}
                        </span>
                        <button
                          onClick={() => handleOption('adult', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Children */}
                    <div className='optionsItem'>
                      <span className='optionText'>Children</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.children <= 0}
                          onClick={() => handleOption('children', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.children}
                        </span>
                        <button
                          onClick={() => handleOption('children', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                    {/* Room */}
                    <div className='optionsItem'>
                      <span className='optionText'>Room</span>
                      <div className='optionCounter'>
                        <button
                          disabled={options.room <= 1}
                          onClick={() => handleOption('room', 'd')}
                          className='optionCounterButton'
                        >
                          -
                        </button>
                        <span className='optionCounterNumber'>
                          {options.room}
                        </span>
                        <button
                          onClick={() => handleOption('room', 'i')}
                          className='optionCounterButton'
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className='headerSearchItems-Button'>
                <span className='headerSearchBtn'>Search</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
