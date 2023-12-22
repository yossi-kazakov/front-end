import React from 'react'
import './Bullet.scss'
import { mockData } from '../mockData'

const Bullet = ({ bulletClicked, setBulletClicked, day }) => {
    const handleClick = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setBulletClicked(day)
    }
    const isTherePostOnDay = mockData.some(post => post.date === `${day}.10`)
    const howManyPostsOnDay = mockData.filter(post => post.date === `${day}.10`).length
    return (
        <div className='bullet-container'>
            <div className={`bullet ${isTherePostOnDay ? 'bullet-active' : ''}`}>
                <div className='bullet-button' onClick={handleClick}>
                    {isTherePostOnDay ? <span>{`${day}.10`}</span>: <span>+</span>}
                    {isTherePostOnDay && <span className='bullet-number'>{howManyPostsOnDay}</span>}
                </div>
                <div className='bullet-actions' style={{ display: bulletClicked === day ? 'flex' : 'none' }}>
                    <div className='bullet-actions-read'>
                        <span>Read Posts</span>
                    </div>
                    <div className='bullet-actions-create'>
                        <span>Create Post</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bullet