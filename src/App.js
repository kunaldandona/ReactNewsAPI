import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Content from './Components/Content';
import Typography from '@material-ui/core/Typography';
import {getData} from './Data/Service'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      requestContent: false,
      content: false,
      messageShown: false,
      search: ''
    };

    // Binds
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({
      search: data
    });
    getData(data,null).then((result) => {
      let response = result;
      this.setState({ data: response, requestContent: true})
      console.log('handleData',result)
     });

  }


  getCountry = async(e) => {
    let country_key="ca"
    let country = e.target.innerText;
    if(country==='U.S.A'){
      country_key="us"
    } else if(country==='AUSTRALIA'){
      country_key="au"
    } else if(country==='MEXICO'){
      country_key="mx"
    } else if(country==='CANADA'){
      country_key="ca"
    }
    getData(null,country_key).then((result) => {
      let response = result;
      this.setState({ data: response, requestContent: true})
      console.log('getCountryArrayOutput',result)
     });
  }

  componentWillMount(){
    getData('','in').then((result) => {
      let response = result;
      this.setState({ data: response, requestContent: true})
      console.log('getDataArrayOutput',result)
     });
  }

  

  createTable = () => {
    let contentData = this.state.data;
    let total = contentData.articles.length;
    let contentArr = []

    for(let i=0; i < total; i++){
      contentArr.push(<Content
        title={this.state.data.articles[i].title} 
        author={this.state.data.articles[i].author} 
        des={this.state.data.articles[i].description} 
        img={this.state.data.articles[i].urlToImage}
        url={this.state.data.articles[i].url}
        key= {i}
        />);
    }
    console.log('ContentArray',contentArr);
    return contentArr
  }

  render() {
    if(this.state.requestContent){
      return (
        <div className="App">
          <Header action={this.handleData} storeName="React News App"/>
          <Menu getCountry={this.getCountry}/>
          {this.createTable()} 

        </div>
      );
    } else{
      return(
        <div className="App">
          <Header storeName="React News App"/>
          <Menu />
          <div style={{height:600, textAlign: "center"}}>
            <Typography component="h2" variant="display1" gutterBottom>
                Please wait, content is loading.
            </Typography>
          </div>
        </div>
      );
    }    
  }
}
export default App;