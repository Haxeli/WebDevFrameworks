import React from 'react'
import styles from './Topic.module.css'

export default function Topic(props) {
    return (
        <div className = { styles.Topic }>
            <div className = { styles.Outline }></div>
            <div className = { styles.Index }>
                <b>{props.index}</b>
            </div>
            <div className = { styles.Content}> 
                <b>{ props.data.topic } | </b>{ props.data.text }
            </div>
            
        </div>

    )
}
