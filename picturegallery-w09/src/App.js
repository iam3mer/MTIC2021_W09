import React from "react";
import PhotoContextProvider from "./context/PhotoContext";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";
import Item from "./components/Item";

class App extends React.Component {

  handleSubmit = (evt, history, searchInput) => {
    evt.preventDefault();
    evt.currentTarget.reset();
    let url = `/search/${searchInput}`;
    history.push(url);
  };

  render() {
    return (
      <PhotoContextProvider>
        <HashRouter basename="/Snap">
          <div className="container">
            <Route render={props => (
              <Header handleSubmit={this.handleSubmit} history={props.history}/>
            )}/>
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/beach"/>}/>
              <Route path="/beach" render={() => <Item searchTerm="beach"/>}/>
              <Route path="/mountain" render={() => <Item searchTerm="mountain"/>}/>
              <Route path="/cats" render={() => <Item searchTerm="cats"/>}/>
              <Route path="/birds" render={() => <Item searchTerm="birds"/>}/>
              <Route path="/search/:searchInput" render={props => (
                <Search searchTerm={props.match.params.searchInput}/>
              )}/>
              <Route component={NotFound}/>
            </Switch> 
          </div>
        </HashRouter>
      </PhotoContextProvider>
    )
  }
}

export default App;
