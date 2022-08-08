import React, { useState } from 'react'

const Search = ({ getQuery }) => {
    const [search, setSearch] = useState("")
    const onChange = (search) => {
        setSearch(search)
        getQuery(search)
    }
 
  return (
    <div className='search'>
        <form>
            <input type="text" className="form-control"
             placeholder="Search for character"
             value={search}
             onChange={(e) => onChange(e.target.value)}>
            </input>
        </form>
    </div>
  )
}

export default Search