import React from 'react'
import { Badge } from 'react-bootstrap'
import NumberFormat from 'react-number-format';

function BadgeEditItem({ movement }) {
    return (
        <Badge pill variant={movement.movementType === "ingreso" ? "success" : "danger"} className="float-right">
            <NumberFormat value={movement.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </Badge>
    )
}

export default BadgeEditItem
