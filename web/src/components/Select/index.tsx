import React, {SelectHTMLAttributes} from 'react'

import './styles.css'

interface Properties extends SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    name: string;
    options: Array<{
            value: string;
            label: string;
        }>;
}

const Select: React.FC<Properties> = ({ name, id, options, ...rest }) => {
    return(
        <div className="select-block">
            <label htmlFor={id}>
                {name}
            </label>
            <select value="" id={id} {...rest}>
                <option value="" label="Selecione uma dia da semana" disabled selected hidden />
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value} label={option.label} />
                    })
                }
            </select>
        </div>
    );
}

export default Select;