import React from 'react';
import { Card } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Frens=()=> {
    return (
        <div>
            <Card>
            <FontAwesomeIcon icon={faCoffee} />
            </Card>
        </div>
    )
}
export default Frens;