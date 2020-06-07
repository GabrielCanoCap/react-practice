import React, { useState } from "react";
import Input from "../../components/input/input";
import Textarea from "../../components/textarea/textarea";

const InputPageExample = () => {
    const [ value, setValue ] = useState("");
    return (
        <main className="input-page-example">
            <Input name="test" value={value} onChange={event => setValue(event.target.value)} placeholder="placeholder" />
            <Textarea name="test" value={value} onChange={event => setValue(event.target.value)} placeholder="placeholder placeholder placeholder placeholder"/>
        </main>
    )
};

export default InputPageExample;