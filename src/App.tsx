import * as React from 'react';
import CounterActions from './components/CounterActions';
import CounterView from './components/CounterView';
import './App.css';

interface Props {}
interface State {
    count: number
}

class App extends React.Component<Props, State> {

    state: State = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: (this.state.count + 1)
        });
    }

    decrement = () => {
        this.setState({
          count: (this.state.count - 1)
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Counter App</h1>
                    <CounterView count={this.state.count} />
                    <CounterActions onIncrement={this.increment} onDecrement={this.decrement}/>
                </header>
            </div>
        );
    }
}


export default App;