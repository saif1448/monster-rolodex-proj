import React from 'react'
import './CardList.css'
import Card from '../cards/Card'

const CardList = ({ monsters }) => {
    // const [monsterList, setMonsterList] = useState([])

    console.log(monsters)
    return (
        <div className='card-list'>
            {monsters.map(monster => {
                return (
                    <Card monster={monster} />
                )
            })}
        </div>
    )
}

export default CardList