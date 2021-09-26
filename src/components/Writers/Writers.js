import React, { useEffect, useState } from 'react';
import SelectedList from '../SelectedList/SelectedList';
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
    // select list use state 
    const [selected, setSelected] = useState([]);
    // event handler for all writer 
    const handleSelect = (writer) => {
        const exist = selected.find(selectedWriter => selectedWriter._id === writer._id);

        if (exist) {

        }
        else {
            const newSelected = [...selected, writer];
            setSelected(newSelected);
        }

    }
    // geting total expenses of selected writer 
    const total = selected.reduce((previous, current) => previous + current.salary, 0)

    return (
        <div className="container">
            <div>
                <h2>Total Writers:{writers.length}</h2>
                <div className="writers-grid">
                    {
                        writers.map(writer => <Writer handleSelect={handleSelect} key={writer._id} writer={writer}></Writer>)
                    }
                </div>


            </div>
            <div className="selected-list">
                <h2>Writer Added: {selected.length}</h2>
                <h2>Total Expenses:{total}</h2>
                {
                    selected.map(select => <SelectedList key={select._id} writer={select}></SelectedList>)
                }
            </div>
        </div>
    );
};

export default Writers;