import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className='card'>
    <div className='card-inner'>
      <div className='card-front'>
        <img src={item.img} alt='' />
      </div>
      <div className='card-back'>
      <a href={`https://www.youtube.com/results?search_query=${item.name}`}>
        <h1>{item.name}</h1>
        <ul>
          <li>
            <strong>Actor:</strong> {item.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {item.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {item.birthday}
          </li>
          <li>
            <strong>Status:</strong> {item.status}
          </li>
        </ul>
        </a>
      </div>
    </div>
  </div>
  )
}

export default CharacterItem