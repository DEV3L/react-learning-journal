import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from '../contexts/authContext';

import PrivateRoute from '../route/PriveRoute';

import Dashboard from '../components/Dashboard';
import ForgotPassword from '../components/ForgotPassword';
import Login from '../components/Login';
import SignUp from '../components/SignUp';

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
