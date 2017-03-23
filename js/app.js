import React, {Component} from 'react';
import {Navigator} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {actions as routerActions, Router, Route, TabRoute} from 'react-native-smart-router';
import Home from './home';
import Page1 from './page1';
import Login from './login';
import Message from './hosinfos';
import About from './about';

class App extends Component {
  render() {      
    return (
      <Router {...this.props} initial="home">
        <TabRoute name="tabbar">
          <Route component={Home} name="home" title="首页" tabIconName="home"/>
          <Route component={Message} name="message" title="列表" tabIconName="th-list"/>
          <Route component={About} name="about" title="我" tabIconName="user"/>
        </TabRoute>
        <Route component={Page1} name="hosDetail" navbar={true} title="详细信息" leftBtn={true}/>
        <Route component={Login} name="login" sceneConfig="FloatFromBottom"/>
      </Router>
    );
  }
}
const mapStateToProps = state => ({
  router: state.router,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
    ...routerActions,
  }, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
