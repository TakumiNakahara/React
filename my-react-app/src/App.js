import React,{Component} from 'react';

// class App extends Component {
//   render(){
//     const greeting = "Hi!This is Takumi!!"
//     return (
//       <React.Fragment>
//         <div className="App">
//           <header className="App-header">
//             <h1 className='title'>HelloWorld</h1>
//           </header>
//         </div>
//         <h2>{greeting}</h2>
//       </React.Fragment>
      
//     );
//   }
// }

const App = () =>{
  const profile = [
    {name: "jhon dow", agr: "28"},
    {name: "kevin", agr: "20"},
    {name: "claire", agr: "24"},
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
    </React.Fragment>
  )
}

const User = (props) => {
  return(
    <li>{props.name}　{props.age}</li>
  )
}


export default App;
