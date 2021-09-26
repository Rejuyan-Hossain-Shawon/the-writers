import React from 'react';
import "./SelectedList.css"

const SelectedList = (props) => {
    console.log(props);
    const { name, picture } = props.writer;
    return (
        <div className="selected-element">
            {/* <img className="select-img" src={picture} alt="" /> */}
            <h3>{name}</h3>
        </div>
    );
};

export default SelectedList;