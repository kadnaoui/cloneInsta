import React from 'react'

export const Field = (props) => {
    const { id, type, placeholder, onChange, value, toggle, label, Red } = props;

    const [hide, setHide] = React.useState(toggle);
    return (
        <div className="field">
            <input
                className="input"
                id={id}
                type={hide ? 'password' : type}
                placeholder={placeholder}
                onChange={onChange} value={value}
                style={Red ? { border: '0.1em solid red' } : {}}
            />
            <label className="label" htmlFor={id}>{label}</label>
            {toggle && <span id="span2" onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</span>}

        </div>
    )
}
