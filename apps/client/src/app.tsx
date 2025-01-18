import { Route, Switch } from 'wouter';
import Home from './pages/home';
import Notes from './pages/notes';
import Navbar from './shared/navbar/components';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background font-rubik text-text">
      <Navbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route>not found</Route>
      </Switch>
    </div>
  );
};

export default App;
