
import data from '../../../data.json'
import { useParams } from 'react-router'
import SourceIcon from '/images/icon-source.svg'
import { StyledSection } from '../styledSection/StyledSection';
import styled from 'styled-components';


  

export default function Planet() {
    const params = useParams();
    const planetName = params.planet;

    const planetObject = data.find( planetObj => planetObj.name === planetName)

  return (
    <StyledMain>
    <StyledSection $planetsize={planetObject?.planetSize}>
    <div className='pages'>
        <button><span>01</span>OVERVIEW</button>
        <button><span>02</span>STRUCTURE</button>
        <button><span>03</span>SURFACE</button>
    </div>
      <img src={planetObject?.images.planet} alt="planet image" />
      <h2>{planetObject?.name}</h2>
      <p>{planetObject?.overview.content}</p>
      <div className="source-container">
        <a href={planetObject?.overview.source}>Source : <span>Wikipedia</span></a>
        <img src={SourceIcon} alt="arrow icon" />
      </div>
      <div className="info-container">
        <div>
          <span>ROTATION TIME</span>
          <p>{planetObject?.rotation}</p>
        </div>
        <div>
          <span>REVOLUTION TIME</span>
          <p>{planetObject?.revolution}</p>
          </div>
        <div>
          <span>RADIUS</span>
          <p>{planetObject?.radius}</p>
        </div>
        <div>
          <span>AVERAGE TEMP.</span>
          <p>{planetObject?.temperature}</p>
        </div>
      </div>
    </StyledSection>
    </StyledMain>
  )
}

const StyledMain = styled.main`
    
    @media only screen and (min-width:1440px){
        padding: 0 165px;
    }
`




