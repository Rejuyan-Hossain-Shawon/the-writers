import React from 'react';
import "./SelectedList.css"

const SelectedList = (props) => {

    const { name, picture } = props.writer;
    return (
        <div className="selected-element">
            <img className="cover" src={picture} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default SelectedList;