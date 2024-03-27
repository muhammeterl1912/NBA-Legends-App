import React from 'react'

const PlayerCard = ({data}) => {
    console.log(data)
  return (
    <div className='card'> 
<img src={data.img} alt=""  />
<p>{data.name}</p>
    
    </div>
  )
}

export default PlayerCard