import React from 'react';

export default function EmailItem(props) {

    const dragStart = () => {
        console.log('dragging');
    }
    const dragEnd = () => {
        console.log('let go');
    }
    return (
        <div className="email-item-container" draggable onDragStart={dragStart} onDragEnd={dragEnd}>
            <label className="email-item-from">From: </label>
            <p>{props.from}</p>
            <label className="email-item-replyTo">ReplyTo: </label>
            <p>{props.replyTo}</p>
            <label className="email-item-subject">Subject: </label>
            <p>{props.subject}</p>
            <label className="email-item-body">Body: </label>
            <p>{props.body}</p>
        </div>
    )
}