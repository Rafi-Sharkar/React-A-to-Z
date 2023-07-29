import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css"
// import  Card from './components/Card.js';

import App from './app';


// __________JSX and JS Expression__________07
// ReactDOM.render(      
//   <div>
//   <h1>Hello, Rafi SharKar</h1>
//   <h2>{todotitle}</h2>        
//   {/* to use js variable in HTML section use { var js } */}
//   <h3>I am a software engineer</h3>
//   <p>I am a first learner and a tech enthusiest. I have a strong background in mechine learing and algorithm development.</p>
//   <p>Year-: {new Date().getFullYear()}</p>
//   </div>,
//   document.getElementById("root")
// )



// __________CSS Styling in JSX__________08

// How to use CSS with JSX
//  1. Inline styling
//  2. CSS stylesheet
//        a. if the stylesheet in public folder then link that in html file
//        b. if the stylesheet in src folder then write import "file_path" in .js file

// const headingStyle = {
//   backgroundColor : "purple",
//   color : "white",
//   textAlign : "center",
//   padding : "15px"
// }

// ReactDOM.render(      
//   <div>
//   <h1 className='headingStyle'>Hello, Rafi SharKar</h1>
//   {/* <h1 style={headingStyle}>Hello, Rafi SharKar</h1> */}
//   <h2>{todotitle}</h2>        
//   {/* to use js variable in HTML section use { var js } */}
//   <h3>I am a software engineer</h3>
//   <p>I am a first learner and a tech enthusiest. I have a strong background in mechine learing and algorithm development.</p>
//   <p>Year-: {new Date().getFullYear()}</p>
//   </div>,
//   document.getElementById("root")
// )


// __________More on CSS in JSX__________09

// ReactDOM.render(
//     <div>
//         <h1 className='headingStyle'>Rafi SharKar</h1>        
//         <div className='full'>
//           <h3 className='cardTitle'>Call Family</h3>
//           <p className='cardDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <p className='cardFooter'>hellow, Lorem Ipsum is simply dummy text of the printing and typesetting industry.{}</p>
//         </div>
//     </div>,
//     document.querySelector("#root")
//     )



// __________How to  create and use react component__________10

// Stage_01

// let Card=()=>{             // "Card" is a functional component. We can use this component multiple time
//   return(
//   <div className='full'>
//   <h3 className='cardTitle'>Call Family</h3>
//   <p className='cardDesc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//   <p className='cardFooter'>hellow, Lorem Ipsum is simply dummy text of the printing and typesetting industry.{}</p>
// </div>)
// }

// ReactDOM.render(
//     <div>
//         <h1 className='headingStyle'>Rafi SharKar</h1>  
//         <Card />
//         <Card />
 
//     </div>,
//     document.querySelector("#root")
//     )

// stage_02
// app.js comments

// __________Props and destructuring__________11

ReactDOM.render(
  <App />,
  document.querySelector("#root")
)