import React from 'react'
import styles from './Sidebar.module.css'
import Topic from './Topic';

export default function Sidebar() {
    
    const mostRead = [
        {
            topic: "Sponsorointi",
            text: "Sakkimaailma tyrmistyi uudesta naisten sakin pääsponsorista: 'Tämä on typerintä, mitä olen nähnyt kuukausiin'"
        },
        {
            topic: "Kolumni",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            topic: "Rikokset",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            topic: "Terveys",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            topic: "Työmarkkinat",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            topic: "Mielenosoitukset",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
    ];

    return (
        <div className = { styles.Sidebar }>
            <h2>Luetuimmat</h2>
            <div>
                {
                    mostRead.map((element, i) => <Topic data={element} index = {i+1} />)
                }
            </div>
        </div>
    )
}
