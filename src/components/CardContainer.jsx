import React from 'react'
import { data } from '../helper/data'
import PlayerCard from './PlayerCard'



export const CardContainer = () => {
  
  return (
    <div className='card-container'>
{data.map((data) => <PlayerCard data = {data}/> )}
    </div>
  )
}
