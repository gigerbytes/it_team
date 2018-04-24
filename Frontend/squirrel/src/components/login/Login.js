import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    render(){
        return (
          <div>
            <div class="title">
              <h1> SHSG Inventory System</h1>
            </div>
            <div class="general-form">
              <div class="form-group">
                <label for="usr"> Username: </label>
                <input type="text" class="form-control" id="usr"></input>
              </div>
              <div class="form-group">
                <label for="pwd"> Password: </label>
                <input type="password" class="form-control" id="pwd"></input>
              </div>
              <button type="button" class="btn btn-default">
                <a href="dashboard">Login</a>
              </button>
            </div>
          </div>
      )
    }
}

export default Login;
