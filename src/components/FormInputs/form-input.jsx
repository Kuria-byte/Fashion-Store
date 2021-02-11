import React from 'react'

const FormInput = ({ handleChange, label, ...otherProps }) => {
    return (
        <div>
            <div className="form-group">
                <label ></label>
                <input className="form-control"  onChange={handleChange} {...otherProps} required />
            </div>


        </div>
    )
}

export default FormInput
