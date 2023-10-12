import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import './App.css'

function App() {
  const [monsterList, setMonsterList] = useState([])
  const [queryString, setQueryString] = useState("")

  const onSearchChange = (event) => {
    const query = event.target.value.toLowerCase()
    setQueryString(query)
  }

  useEffect(() => {
    return () => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(monsterList => setMonsterList(monsterList))
    }
  }, [])

  const filtetedMonsterList = monsterList.filter(monster => monster.name.toLowerCase().includes(queryString))

  return (
    <>
      <h1 className="app-title">Monster Rolodox</h1>
      <SearchBox placeholder='monster name' className='search-box' onSearchChange={onSearchChange} />
      <CardList monsters={filtetedMonsterList} />

    </>
  )
}

export default App