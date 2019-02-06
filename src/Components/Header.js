import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Header extends React.Component {
  constructor() {
    super();

    this.submitHandler = this.submitHandler.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      inputField: ''
    };
  }
  
  onChange(e){
    this.setState({inputField:e.target.value});
    console.log(this.state)
   }

   submitHandler() {
    this.props.action(this.state.inputField);
    this.setState({
      inputField: ''
    });
  }
  
    render() {
      return (
        <div className="header-main">
        <div className="headings">
            <h1>{this.props.storeName}</h1>
        </div>
        <div className="search">
            <form noValidate autoComplete="off">
                <TextField
                id="outlined-full-width"
                name="search-value"
                label="Search"
                onChange={this.onChange}
                style={{width: 700, height: 60, marginRight:10}}
                placeholder="Search any topic..."
                variant="outlined"
                value={this.state.inputField}
                InputLabelProps={{
                shrink: true,
                }}
                />
                <Button onClick={this.submitHandler} variant="outlined" size="large" color="primary" style={{height: 55.74}} >
                    Search Now
                </Button>
            </form>
        </div>
        
    </div>
      );
    }
  }
  export default Header