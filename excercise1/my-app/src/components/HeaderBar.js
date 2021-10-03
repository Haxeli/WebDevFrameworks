import React from 'react'

export default function HeaderBar() {
    return (
        <div className="HeaderBar">
            <table className="Otsikot">
                <td>
                    <div className="HS-logo">
                        <p>
                            Helsingin Sanomat
                        </p>
                    </div>
                </td>
                <td>
                    <div className="Uutiset">
                        <p>
                            Uutiset
                        </p>
                    </div>
                </td>
                <td>
                    <div className="Lehdet">
                        <p>
                            Lehdet
                        </p>
                    </div>
                </td>
                <td>
                    <div className="Tilaa">
                        
                            Tilaa
                        
                    </div>
                </td>
                <td>
                    <div className="Kirjaudu">
                        <p>
                            Kirjaudu
                        </p>
                    </div>
                </td>
                <td>
                    <div className="Hae">
                        <p>
                            Hae
                        </p>
                    </div>
                </td>
                <td>
                    <div className="Valikko">
                        <p>
                            Valikko
                        </p>
                    </div>
                </td>
            </table>
        </div>
    )
}
