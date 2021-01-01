import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../contexts/authContext';

import PrivateRoute from '../route/PriveRoute';

import Dashboard from '../containers/Dashboard';
import Login from '../containers/Login';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
