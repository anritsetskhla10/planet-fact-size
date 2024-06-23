import data from '../../../data.json'
import { useParams } from 'react-router'
import SourceIcon from '/images/icon-source.svg'
import { StyledSection } from '../styledSection/StyledSection';
import styled from 'styled-components';
import { useState } from 'react';




export default function Planet() {

  const params = useParams();
  const planetName = params.planet;

  const planetObject = data.find(planetObj => planetObj.name === planetName);

  const [currentView, setCurrentView] = useState<'overview' | 'structure' | 'surface'>('overview');

  const handleViewChange = (view: 'overview' | 'structure' | 'surface') => {
    setCurrentView(view);
  };

  const getViewContent = () => {
    if (currentView === 'overview') {
      return {
        image: planetObject?.images.planet,
        content: planetObject?.overview.content,
        source: planetObject?.overview.source,
      };
    } else if (currentView === 'structure') {
      return {
        image: planetObject?.images.internal,
        content: planetObject?.structure.content,
        source: planetObject?.structure.source,
      };
    } else if (currentView === 'surface') {
      return {
        image: planetObject?.images.planet,
        surfaceImage: planetObject?.images.geology,
        content: planetObject?.geology.content,
        source: planetObject?.geology.source,
      };
    }
  };

  const currentContent = getViewContent();

  return (
    <StyledMain>
      <StyledSection
        $planetsize={planetObject?.planetSize}
        $planetcolor={planetObject?.color}
        $surfacedist = {planetObject?.surfaceDist}
      >
        <div className='pages'>
          <button onClick={() => handleViewChange('overview')}><span>01</span>OVERVIEW</button>
          <button onClick={() => handleViewChange('structure')}><span>02</span>STRUCTURE</button>
          <button onClick={() => handleViewChange('surface')}><span>03</span>SURFACE</button>
        </div>
        <div className="image-container">
          <img src={currentContent?.image} alt="planet image" />
          {currentView === 'surface' && <img className="surface-image" src={currentContent?.surfaceImage} alt="surface image" />}
        </div>
        <h2>{planetObject?.name}</h2>
        <p>{currentContent?.content}</p>
        <div className="source-container">
          <a href={currentContent?.source}>Source : <span>Wikipedia</span></a>
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
  );
}

const StyledMain = styled.main`
  @media only screen and (min-width: 1440px) {
    padding: 0 165px;
  }
`;