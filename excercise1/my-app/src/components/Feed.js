import React from 'react'
import styles from './Feed.module.css'
import juurinyt from './images/juurinyt.gif'
import huawei from './images/huawei.PNG'

export default function Feed() {
    return (
        <div className={ styles.Feed }>
            <div className={ styles.Mainbar }>
                <img src={ juurinyt } />
                <h2><span className={ styles.Highlight }>Yt-neuvottelut |</span> Poliisi aloittaa yt-neuvottelut</h2>
                Politiikka
            </div>

            <div className={ styles.Mainbar }>
                <img src= { huawei } />
                <h2><span className={ styles.Highlight }>Lorem ipsum dolor sit amet |</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h2>
                Elektroniikka
            </div>
        </div>

    )
}
