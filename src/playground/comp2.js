
import {useLocation} from 'react-router-dom';

function ComponentB() {

   const location = useLocation();
  
       return (

        
              
<div>{location.state.name} state name here</div>

           
       )
   }

export default ComponentB;