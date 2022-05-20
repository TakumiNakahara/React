import React,{Component} from 'react';
import PropTypes from 'prop-types';

const App = () =>{
  const profile = [
    {name: "jhon dow", age: 25},
    {name: "kevin", age: 20},
    {name: "claire", age: 24},
  ]
  return (
    <React.Fragment>
      <h1 className='title'>登録者名簿</h1>
      <ul>
        {
          profile.map(function(profile , index){
            return <User name={profile.name}  age={profile.age} key={index}/>
          })
        }
      </ul>
      <Counter></Counter>
    </React.Fragment>
  )
}

const User = (props) => {
  return(
    <li>{props.name}　{props.age}</li>
  )
}


User.propTypes = {
  name : PropTypes.string,
  age : PropTypes.number,
}


class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {count: 0}
    console.log(this.state);
  }
  countPlus = ()=> {
    console.log('OK');
    const currentCount = this.state.count;
    this.setState({count: currentCount + 1});
  }
  countMinus = ()=> {
    console.log('OK');
    const currentCount = this.state.count;
    this.setState({count: currentCount - 1});
  }
  render(){
    const greeting = "Hi!This is Takumi!!"
    console.log(this.state);
    return (
      <React.Fragment>
        <h2>count:{this.state.count}</h2>
        <button onClick={this.countPlus}>+1</button>
        <button  onClick={this.countMinus}>-1</button>
      </React.Fragment>
      
    );
  }
}

export default App;
