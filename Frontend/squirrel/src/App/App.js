import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from  '../components/dashboard/Dashboard';
import Login from  '../components/login/Login';

class App extends React.Component {
    render(){
        return (
            <div class="App">
                <Login />
            </div>
        )
    }
}

export default App;
