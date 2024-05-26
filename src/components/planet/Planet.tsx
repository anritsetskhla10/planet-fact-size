import styled from 'styled-components';
import data from '../../../data.json'
import { useParams } from 'react-router'
import OverviewSection from '../sections/OverviewSection';
import StructureSection from '../sections/StructureSection';
import SurfaceSection from '../sections/SurfaceSection';

export default function Planet() {
    const params = useParams();
    const planetName = params.planet;

    const planetObject = data.find( planetObj => planetObj.name === planetName)

  return (
   <StyledMain>
    <div>
        <button>OVERVIEW</button>
        <button>Structure</button>
        <button>Surface</button>
    </div>

    <OverviewSection planetObject={planetObject}/>
    <StructureSection planetObject={planetObject}/>
    <SurfaceSection planetObject={planetObject}/>

   </StyledMain>
  )
}



const StyledMain = styled.main`
    
    & > img{
        
    }

`



