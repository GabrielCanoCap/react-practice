import React, { useRef } from "react";
import "./input.scss"

const Input = props => {
    const { value, placeholder, onChange, name } = props;
    const inputRef = useRef();
    const handleLabelFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div className="input">
            <input ref={inputRef} className="input__field" name={name} value={value} onChange={onChange}/>
            <label onClick={handleLabelFocus} className="input__placeholder">{placeholder}</label>
        </div>
    )
};

export default Input;