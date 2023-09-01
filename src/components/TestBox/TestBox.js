import React from 'react';

function TestBox(props) {

    console.log(props);

    return (
        <>
            <div>
                <label>{props.inputTitleName}</label>
            </div>
            <div>
                <input type="text" />
            </div>
        </>
    );
}

export default TestBox;