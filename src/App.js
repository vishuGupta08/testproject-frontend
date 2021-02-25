import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import SurveyorPage from './containers/SurveyorPage/SurveyorPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import Aux from './hoc/auxi'
import state from './containers/State/State'
import Children from './containers/Children/Children'
import auth from './containers/auth/auth'
import district from './containers/District/District'

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>

          <Switch>
            <Route path="/auth" component={auth} />
            <Route path="/state" component={state} />
            <Route path="/district" component={district} />
            <Route path="/children" component={Children} />
            <Route path="/" exact component={SurveyorPage} />
            <Redirect to="/" />
          </Switch>

        </Layout>
      </Aux>
    );
  }
}

export default App;
