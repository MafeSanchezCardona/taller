import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonCloseForm({ onClick, title }) {
    return (
        <Button variant="secondary" className="mr-2 mt-1" style={{ marginLeft: '128px' }} onClick={onClick}>
            {title}
        </Button>
    )
}

export default ButtonCloseForm
