import React, { useState } from 'react';
import Contact from './Contact';

function Home() {
    const [title, setTitle] = useState('');

    const handleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div id='myAppElement'>
            <form onSubmit={handleSubmit} style={{ width: 400 + 'px' }}>
                <div className='form-group'>
                    <label htmlFor="title">Item</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button className='btn btn-primary' type="submit">SAVE</button>
            </form>
            <Contact phone={'9999999999'} />
        </div>
    );
}

export default Home;