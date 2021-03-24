// import React, { useState } from 'react';
// import AppContext from './components/AppContext';

// export const App = () => {
//   // Define as many global variables as your app needs, and hooks 
//   // to set the state of the variable.
//   const [setting1value, setSetting1value] = useState('initialValue1');
//   const [setting2value, setSetting2value] = useState(false);

// }
import React, { Component } from 'react';

import Layout from './component/Layout/Layout';
import SurveyorPage from './containers/SurveyorPage/SurveyorPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import Aux from './hoc/auxi'
import state from './containers/State/State'
import Children from './containers/Children/Children'
import childDetail from './containers/childDetail/childDetail'
import auth from './containers/auth/auth'
import district from './containers/District/District'
import logout from './containers/logout/logout'
import newChild from './containers/newChild/newChild'
import report from './containers/report/report'
import reportTwo from './containers/report/reportTwo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: 0,
    };
  }



  render() {
    let routes;

    if (this.state.loggedIn === 0) {
      routes = (
        // <Route logged={this.state.loggedIn} path="/auth" component={auth} />
        <Switch>
          <Route path="/auth" component={auth} />
          <Route path="/state" component={state} />
          <Route path="/district" component={district} />
          <Route path="/children" component={Children} />
          <Route path="/logout" component={logout} />
          <Route path="/newchild" component={newChild} />
          <Route path="/childDetail/:id" component={childDetail} />
          <Route path="/report" exact component={report} />
          <Route path="/reportdistrict/:id" component={reportTwo} />
          <Route path="/" exact component={SurveyorPage} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (

      <Aux>
        <Layout>

          {routes}

        </Layout>
      </Aux>

    );
  }


}

export default App;
