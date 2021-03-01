import React from 'react';
import '../CreateBoard/CreateBoard.css';

const SendInvitation = ({
    placeholder,
    nameButton,
    sendInvitation,
    setSendInvitation,

}) => {
    return (
        <div className="plus">
            <div className="plus-plus">
                <form className="plus-button">
                    <input 
                        type="text"
                        className="plus-button__input"
                        placeholder={placeholder}
                    />
                </form>
                    <button
                        className="plus-button__button" 
                        onClick={() => setSendInvitation(!sendInvitation)}
                    >
                        {nameButton} 
                    </button>
            </div>
            <div 
                className="empty-space" 
                onClick={() => setSendInvitation(!sendInvitation)}
            >

            </div>
        </div>
    )
}

export default SendInvitation
