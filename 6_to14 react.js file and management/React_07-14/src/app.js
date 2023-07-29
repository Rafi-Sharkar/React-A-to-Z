import React from 'react';
import ReactDOM from 'react';
// import Card from './components/Card'
// import Data from './data.json'
// import Lt from './components/UniqueList/List'

// let items = [];

// let items = Data.map((item)=> <Card titleText = {item.title} desc = {item.descripiton}/>)  // simpler way to display data

// for(let i=0; i<Data.length;i++){
//     items.push( <Card titleText = {Data[i].title} desc = {Data[i].descripiton}/> )
// }


// let App=()=>{

//     return(
//         <div>
//         <h1 className='headingStyle'> Rafi SharKar </h1>
//         {/* {items} */}

//         {Data.map((item,index)=> <Card key={index} titleText = {item.title} desc = {item.descripiton}/>)}



//         </div>
//     )
// }

// export default function App(){
//         return(
//         <>      
//                 <Lt/>
//         </>
//         )
//         }

const users = [
        {
                fullName : "Rafi Sharkar",
                age : 23,
                contact : [{phone : 8801905493909},
                         {email : "rafisharkar144@gmail.com"},
                         {github : "github.com/Rafi-Sharkar"}]
        },
        {
                fullName : "Alif",
                age : 23,
                contact : [{phone : 8801023492},
                         {email : "alu.bikrimpur@gmail.com"},
                         {github : "github.com/alu"}]
        },
        {
                fullName : "Mahabub",
                age : 23,
                contact : [{phone : 880198243820},
                         {email : "bubvhi@gmail.com"},
                         {github : "github.com/bub-vhi"}]
        }
]

export default function App(){
        
        return( <div>
                {users.map((user,index)=>{
                        <article key={index}>
                        <h1>RAfi SharKar</h1>
                        <h3>{user.fullName}</h3>
                        </article>
                })}
        </div>)
}




// export default App;


// to make index.js file Minimalist

//  1. All component files are in "component" folder which at "src" forler

//  2. All component are load at App.js file

//  3. index.js just read the App file.

//  4. Please, carefully make file and folders name
