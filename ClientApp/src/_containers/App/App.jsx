import React, { PureComponent } from 'react';
import { Route } from 'react-router';
import Layout  from '../../_components/Layout/Layout';
import Logon  from '../../_components/Logon/Logon';
import Login  from '../../_components/_invincible/Login/Login';
import Register  from '../../_components/_invincible/Register/Register';


// class LoginWrapper extends PureComponent
// {
//   render (){
//     return (
//       <Logon 
//       alternativeDescription="Don't have an account?"
//       alternativeLink="/register"
//       alternativeClickText="Register"
//       children = {
//         <Login/>}
//       />
//     );
//   }
// }

// class RegisterWrapper extends PureComponent
// {
//   render (){
//     return (
//       <Logon 
//       alternativeDescription="Already have an account?"
//       alternativeLink="/"
//       alternativeClickText="Login"
//       children = {
//         <Register/>}
//       />
//     );
//   }
// }

class App extends PureComponent {
  displayName = App.name

  render() {
    return (
      <Layout>
          <Route  path='/login' render={()=> (
            <Logon alternativeDescription="Don't have an account?" alternativeLink="/register" alternativeClickText="Register"
              children= { <Login/>}/>)}  />
                
          <Route  path='/register' render={()=> (
            <Logon alternativeDescription="Already have an account?" alternativeLink="/login" alternativeClickText="Login"
              children = {<Register/>}/>)}  />
            
      </Layout>
    );
  }
}

export default App;