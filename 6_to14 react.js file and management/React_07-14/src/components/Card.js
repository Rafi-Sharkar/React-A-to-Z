

let Card=(props)=>{             // "Card" is a functional component. We can use this component multiple time

  const{ titleText, desc} = props;
    return(
    <div className='full'>
    <h3 className='cardTitle'>{titleText}</h3>
    <p className='cardDesc'>{desc}</p>
    
  </div>)
  }

  export default Card;