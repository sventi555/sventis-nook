import { Route, Switch } from 'wouter';
import Navbar from './components/navbar';
import PageContainer from './components/page-container';
import Home from './pages';
import Notes from './pages/notes';
import Note from './pages/notes/[id]';

const App: React.FC = () => {
  return (
    <div className="min-h-full bg-blue-950 text-neutral-300">
      <Navbar />
      <PageContainer>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="/notes/:id">
            <Note />
          </Route>
          <Route>not found</Route>
        </Switch>
      </PageContainer>
    </div>
  );
};

export default App;
