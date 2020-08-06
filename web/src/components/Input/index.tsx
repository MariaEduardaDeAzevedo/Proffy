import React, {InputHTMLAttributes} from 'react'

import './styles.css'

interface Properties extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    name: string;
}

const Input: React.FC<Properties> = ({ name, id, ...rest }) => {
    return(
        <div className="input-block">
            <label htmlFor={id}>
                {name}
            </label>
            <input id={id} {...rest}/>
        </div>
    );
}

export default Input;