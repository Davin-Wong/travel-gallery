import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path='/' exact element={<Users />} />
          <Route path='/:userId/places' exact element={<UserPlaces />}></Route>
          <Route path='/places/new' exact element={<NewPlace />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
