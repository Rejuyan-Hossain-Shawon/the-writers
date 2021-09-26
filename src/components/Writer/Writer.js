import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./Writer.css"

const Writer = (props) => {

    const { picture, name, salary, age, proffession, email, phone } = props.writer
    const userIcon = <FontAwesomeIcon icon={faUser} />;
    const emailIcon = <FontAwesomeIcon icon={faEnvelope} />;
    return (
        <div className="container-writer">
            <div>
                <img src={picture} alt="" />
            </div>
            <div>
                <p>Name: {name}</p>
                <p>Proffesion: {proffession}</p>
                <p>Salary: ${salary}</p>
                <p>Age: {age}</p>
                <p>Phone: {phone} <a href={email}>{emailIcon}</a></p>
                <button onClick={() => props.handleSelect(props.writer)} className="btn-regular">{userIcon} Select</button>


            </div>
        </div>
    );
};

export default Writer;