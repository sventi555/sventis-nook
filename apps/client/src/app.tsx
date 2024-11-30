import { Route, Switch } from 'wouter';
import Home from './pages';

const App: React.FC = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default App;
