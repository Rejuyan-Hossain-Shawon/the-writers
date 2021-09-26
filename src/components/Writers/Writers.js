import React, { useEffect, useState } from 'react';
import Writer from '../Writer/Writer';
import "./Writers.css";

const Writers = () => {
    //    data loading from local server using hooks
    const [writers, setWriters] = useState([]);
    // no dependency because its default
    useEffect(() => {
        fetch("./writers.json")
            .then(res => res.json())
            .then(data => setWriters(data))
    }, [])


    return (
        <div className="container">
            <div>
                <h2>Total Writers:{writers.length}</h2>
                <div className="writers-grid">
                    {
                        writers.map(writer => <Writer key={writer._id} writer={writer}></Writer>)
                    }
                </div>


            </div>
            <div className="selected-list">
                <h3>selected writer cart</h3>
            </div>
        </div>
    );
};

export default Writers;