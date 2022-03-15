import React from "react";

function sessionLength(props) {


    function incremTime() {
        props.incTime()
    }

    function decremTime() {
        if (props.currentTime === 1) {
            return;
        }
        props.decTime()
    }

    return (
        <section className='section__dop'>
            <p className="section__text">{props.sessionText}</p>
            <div className='section__div'>
                <button className="btn__main" onClick={incremTime}>Up</button>
                <p className="text__middle">{props.currentTime}</p>
                <button className="btn__main" onClick={decremTime}>Down</button>

            </div>
        </section>
    )
}

export default sessionLength;