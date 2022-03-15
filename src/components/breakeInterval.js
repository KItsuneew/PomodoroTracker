import React from 'react';

function breakInterval(props) {

    function decremCount() {
        if (props.currentBreak === 1) {
            return;

        }
        props.decreaseBreak()
    }

    function incremCount() {
        if (props.currentBreak === 60) {
            return;
        }

        props.increaseBreak();
    }

    return (
        <section className='section__dop'>
            <p className='section__text'>{props.breakeText}</p>
            <div className='section__div'>
                <button className="btn__main" onClick={incremCount}>Up</button>
                <p className='text__middle'>{props.currentBreak}</p>
                <button className="btn__main" onClick={decremCount}>Down</button>
            </div>
        </section>
    );

}

export default breakInterval;