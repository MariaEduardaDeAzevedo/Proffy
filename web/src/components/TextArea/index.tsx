import React, {TextareaHTMLAttributes} from 'react'

import './styles.css'

interface Properties extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    name: string;
}

const TextArea: React.FC<Properties> = ({ name, id, ...rest }) => {
    return(
        <div className="textarea-block">
            <label htmlFor={id}>
                {name}
            </label>
            <textarea id={id} {...rest}/>
        </div>
    );
}

export default TextArea;