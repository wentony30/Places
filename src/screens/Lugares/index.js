import React from 'react'
import { Container } from './style'

const Lugares = ({ route }) => {

   const { position } = route.params

   return(
      <Container>
          {console.warn(position)}
      </Container>
   );
}

export default Lugares;