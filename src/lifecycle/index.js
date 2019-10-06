import React from 'react';
import '../App.css';

class lifeCycle extends React.Component {
    constructor(){
        super();
        this.state = {
            count: 1
        }
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log('componentWillUpdate')
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log('componentWillReceiveProps')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate')
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch')
    }

    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    increase = () => {
        this.setState(state => ({ count: state.count + 1}))
    }

    render() {
        const { count } = this.state;
        const {
            color,
            // changeBg,
            unmountComponent,
        } = this.props;
        console.log('render component');
        return (
            <div className="life-cycle">
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    onClick={(e) => {e.preventDefault()}}
                    style={{ color }}
                >
                    {count} times
                </a>

                <button onClick={this.increase}>Change state</button>
                {/*<button onClick={changeBg}>Change color</button>*/}
                <button onClick={unmountComponent}>Unmount</button>
            </div>
        );
    }
}

export default lifeCycle
