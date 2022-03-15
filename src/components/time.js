import React from "react";

class Timer extends React.Component {
    constructor() {
        super();

        this.state = {
            isSession: true,
            timerSecond: 0,
            interval: 0,
            count: 1
        }

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this)
        this.decreaseTime = this.decreaseTime.bind(this);
    }
    play() {
        let interval = setInterval(this.decreaseTime, 1000);

        this.setState({
            interval: interval,
        })
    }

    decreaseTime() {
        switch (this.state.timerSecond) {
            case 0:
                if (this.props.timerMinute === 0) {
                    if (this.state.isSession) {
                        this.setState({
                            isSession: false
                        })

                        this.props.ToggleInterval(this.state.isSession);
                    }
                    else {
                        this.setState({
                            isSession: true
                        })

                        this.props.ToggleInterval(this.state.isSession);
                    }
                }
                this.props.UpdateTimer()
                this.setState({
                    timerSecond: 59
                })
                break;
            default:
                this.setState((prev) => {
                    return {
                        timerSecond: prev.timerSecond - 1
                    }
                })
                break;
        }
    }

    pause() {
        clearInterval(this.state.interval)
    }

    render() {
        return (
            <section>
                <section className="section__btn">
                    <button className="btn__main" onClick={this.play}>Play</button>
                    <button className="btn__main" onClick={this.pause}>Pause</button>
                </section>
                <section className="time__cont">
                    <h4>{this.state.isSession === true ? "Session" : "Break"}</h4>
                    <div className="section__time">
                        <span>{this.props.timerMinute}</span>
                        <span>:</span>
                        <span>
                            {this.state.timerSecond === 0
                                ? '00'
                                : this.state.timerSecond < 10
                                    ? '0' + this.state.timerSecond
                                    : this.state.timerSecond}
                        </span>
                    </div>
                </section>
            </section>
        )
    }
}

export default Timer;