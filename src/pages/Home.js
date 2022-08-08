import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import CharacterList from '../components/CharacterList'
import axios from "axios"

const Home = () => {
    const [ items, setItems ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [query, setQuery] = useState("")

    useEffect(() => {
        const grabCharacters = async () => {
          const res = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${query}`)
          setItems(res.data)
          setIsLoading(false)
        } 
        grabCharacters()
      },[query])

  return (
    <div>
        <Header />
        <Search getQuery={(search) => setQuery(search)}/>
        <CharacterList isLoading={isLoading} items={items}/>
    </div>
  )
}

export default Home