import React from 'react';
import styles from './View.module.css';
import SearchResult from './SearchResult';

export default function View(props) {

  return (
    <div>
      <div className={ styles.Grid }>
      {
        props.items.map(item => <SearchResult key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
