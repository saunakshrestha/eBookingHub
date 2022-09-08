import './footer.css'

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='fLists'>
          <ul className='fList'>
            <li className='fListItem'>Countries</li>
            <li className='fListItem'>Provinces</li>
            <li className='fListItem'>Cities</li>
            <li className='fListItem'>Districts</li>
            <li className='fListItem'>Airports</li>
            <li className='fListItem'>Hotels</li>
          </ul>
          <ul className='fList'>
            <li className='fListItem'>Homes </li>
            <li className='fListItem'>Apartments </li>
            <li className='fListItem'>Resorts </li>
            <li className='fListItem'>Villas</li>
            <li className='fListItem'>Hostels</li>
            <li className='fListItem'>Guest houses</li>
          </ul>
          <ul className='fList'>
            <li className='fListItem'>Unique places to stay </li>
            <li className='fListItem'>Reviews</li>
            <li className='fListItem'>Unpacked: Travel articles </li>
            <li className='fListItem'>Travel communities </li>
            <li className='fListItem'>Seasonal and holiday deals</li>
          </ul>
        </div>
      </div>
      <div className='fText'>Copyright © 2022 eBookingHub</div>
    </>
  )
}

export default Footer
