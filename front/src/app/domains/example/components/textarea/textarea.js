import React, { useRef } from "react";
import "./textarea.scss"

const Textarea = props => {
    const { value, placeholder, onChange, name } = props;
    const inputRef = useRef();
    const handleLabelFocus = () => {
        inputRef.current.focus();
    }

    return (
        <div className="textarea">
            <textarea ref={inputRef} className={`textarea__field${value?" textarea__field":""}`} name={name} value={value} onChange={onChange}/>
            <label onClick={handleLabelFocus} className="textarea__placeholder">{placeholder}</label>
        </div>
    )
};

export default Textarea;