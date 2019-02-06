import React from 'react'
import { Button } from '@material-ui/core';

const Menu = (props) => (
  <div className="menu-links">
    <Button variant="contained" size="large" color="primary" fullWidth={true} onClick={props.getCountry}> 
        U.S.A
    </Button>
    <Button variant="contained" size="large" color="primary" fullWidth={true} onClick={props.getCountry}> 
        Australia
    </Button>
    <Button variant="contained" size="large" color="secondary" fullWidth={true} onClick={props.getCountry}> 
        Search Results
    </Button>
    <Button variant="contained" size="large" color="primary" fullWidth={true} onClick={props.getCountry}> 
        Mexico
    </Button>
    <Button variant="contained" size="large" color="primary" fullWidth={true} onClick={props.getCountry}> 
        Canada
    </Button>
  </div>
  
)

export default Menu
