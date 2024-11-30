import { Route, Switch } from 'wouter';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';
import Home from './pages';
import Notes from './pages/notes';

const App: React.FC = () => {
  return (
    <div className="h-full bg-blue-950">
      <Navbar />
      <PageContainer>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
        </Switch>
      </PageContainer>
    </div>
  );
};

export default App;
