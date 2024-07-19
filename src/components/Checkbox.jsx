import React from 'react';
import './checkbox.css';
export default function Checkbox(props) {

    return (
        <div className="checkbox-wrapper">
            <input
                type="checkbox"
                id={props.id}
                checked={props.checked}
                onChange={props.onChange}
                className="checkbox-input"
            />
            <label htmlFor={props.id} className="checkbox-label">
                <span className="column-label">{props.label}</span>
                <span className="custom-checkbox"></span>
            </label>
        </div>
    );
}