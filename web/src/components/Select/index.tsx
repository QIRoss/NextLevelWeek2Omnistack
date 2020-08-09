import React, { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>
}

// 46 MIN 

const Select: React.FC<SelectProps> = ({ label, name, ...rest}) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} {...rest}/>
        </div>
    );
}

export default Select;