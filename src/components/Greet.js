import React from 'react'

const Greet = (props) => {
  return (
    <div>
        <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    </div>
  )
}

export default Greet;

//Destructuring props in function definition

// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//         <h1>Hello {name} a.k.a {heroName}</h1>
//     </div>
//   )
// }


//Destructuring props inside function

// const Greet = (props) => {
//     const {name, heroName} = props
//   return (
//     <div>
//         <h1>Hello {props.name} a.k.a {props.heroName}</h1>
//     </div>
//   )
// }

