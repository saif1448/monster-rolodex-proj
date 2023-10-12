import React from 'react'
import './Cards.css'

const Card = ({monster}) => {
    const { name, id, email } = monster
    console.log(monster)
    return (
        <div className='card-container' key={id}>
            <img alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
}

export default Card