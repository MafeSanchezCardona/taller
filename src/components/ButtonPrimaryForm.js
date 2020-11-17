import React from 'react'
import { Button } from 'react-bootstrap'

function ButtonPrimaryForm({ title }) {
    return (
        <Button variant="primary" type="submit" className="mt-1" >
            {title}
        </Button>
    )
}

export default ButtonPrimaryForm
