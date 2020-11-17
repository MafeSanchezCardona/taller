import React from 'react'
import ButtonCloseForm from './ButtonCloseForm';
import ButtonPrimaryForm from './ButtonPrimaryForm';
import MovementTypeForm from './MovementTypeForm';
import NameInputForm from './NameInputForm';
import QuantityInputForm from './QuantityInputForm';

function RegistrationBasicForm({ movement, handleInputChange, onClickClose, titleCancel, titlePrimary }) {
    return (
        <>
            <MovementTypeForm movement={movement} handleInputChange={handleInputChange} />
            <NameInputForm movement={movement} handleInputChange={handleInputChange} />
            <QuantityInputForm movement={movement} handleInputChange={handleInputChange} />
            <ButtonCloseForm onClick={onClickClose} title={titleCancel} />
            <ButtonPrimaryForm title={titlePrimary} />
        </>
    )
}

export default RegistrationBasicForm
