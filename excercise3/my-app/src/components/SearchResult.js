import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/images/${props.image}`} /></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.rating }>Rating: { props.rating }/5</div>
          <div className={ styles.price }>{ props.price }€</div>
        </div>
    </div>
  )
}