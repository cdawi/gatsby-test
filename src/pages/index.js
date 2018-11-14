import React from "react"
import styled from 'styled-components'

import { BrowserRouter as Router} from 'react-router-dom';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import { MySection } from './components/mysection';

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`
const list = [];
for (let i = 0; i < 25; i++) {
    list.push(i);    
}

export default () => 
    <Router>
        <> 
        <Nav>
            {list.map( (i) => (<NavLink key={i} smooth
                to={"/#section" + i}
                activeClassName="selected"
                >Section {i}</NavLink>))}
        </Nav>
        {list.map( (i) => ( <MySection key={i} name={"Section "+ i} id={"section" + i}></MySection>))}      

        </>
  
    </Router>