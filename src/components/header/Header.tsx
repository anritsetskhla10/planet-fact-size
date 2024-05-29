import data from '../../../data.json'
import StyledHeader, { Circle } from './StyledHeader'
import { Link } from 'react-router-dom'
import menuImg from '/images/icon-hamburger.svg'
import arrowImg from '/images/icon-chevron.svg'
import { useState } from 'react'



export default function Header() {
    const [openMenu , setOpenMenu] = useState(false);

  return (
    <StyledHeader $openmenu={openMenu}>
       <nav>
        <div>
        <h1>THE PLANETS</h1>
        <button onClick={() => setOpenMenu(!openMenu)}>
            <img src={menuImg} alt="menu icon" />
        </button>
        </div>
        <hr />
        <ul>
            {data.map((planet , index) => {
                return <div key={index}>
                    <Circle color={planet.color}></Circle>
                    <li>
                    <Link to={`/${planet.name}`}>{planet.name}</Link>
                    </li>  
                 {/* აქ ღილაკზეც მინდა რომ ილინკებოდეს */}
                    <button > 
                    <img src={arrowImg} alt="arrow icon" />
                    </button>
                    </div>
            })}
        </ul>
       </nav>

    </StyledHeader>
  )
}

