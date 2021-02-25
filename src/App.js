import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import SurveyorPage from './containers/SurveyorPage/SurveyorPage'
import { Route, Switch, Redirect } from 'react-router-dom'
import Aux from './hoc/auxi'
import state from './containers/State/State'
import Children from './containers/Children/Children'

class App extends Component {
  render() {
    return (
      <Aux>
        <Layout>

          <Switch>
            <Route path="/state" component={state} />
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
