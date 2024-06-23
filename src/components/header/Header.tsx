import StyledHeader, { Circle, StyledLI } from './StyledHeader'
import { Link} from 'react-router-dom'
import menuImg from '/images/icon-hamburger.svg'
import arrowImg from '/images/icon-chevron.svg'
import { useState } from 'react'
import { TPlanet } from '../../types/Types'


interface HeaderProps {
  data: TPlanet[],
  setSelectedPlanet: React.Dispatch<React.SetStateAction<TPlanet>>;
}

export default function Header({setSelectedPlanet, data}:HeaderProps) {

    const [openMenu , setOpenMenu] = useState(false);


    const handlePlanetClick = (planet: any) => {
      setSelectedPlanet(planet); 
    };
  return (
    <StyledHeader $openmenu={openMenu} >
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
                    <StyledLI $bordercolor={planet.color}>
                    <Link to={`/${planet.name}`} onClick={() => handlePlanetClick(planet)}>{planet.name}</Link>
                    </StyledLI>  
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

