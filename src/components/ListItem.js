import React from 'react'
import './ListItem.css'

function ListItem({createdAt,name,avatar}) {
    const date=new Date(createdAt).toString();
    return (
        <div className=' video-item item'>
            <img className='ui image' src={process.env.PUBLIC_URL+'./avatar.jpg'} alt={`img-id:${name}`}></img>
            <div className='content'>
            <h3>{name}</h3>
            <div>Created at : <span className='date'>{date}</span></div>
        </div>
        </div>
    )
}

export default ListItem
