import React, { useState } from 'react';
import { Alert, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import { useAuth } from '../contexts/authContext';
import BrandLogo from '../components/brand-logo/BrandLogo';

export default function Login() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { loginWithTwitterPopup } = useAuth();

  const history = useHistory();

  async function twitterLogin(e) {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {
      await loginWithTwitterPopup();
      history.push('/');
    } catch (err) {
      setError('Failed to sign in');
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <BrandLogo className="mb-2" />

          <h2 className="text-center">Learning Journal</h2>
          <hr className="ml-3 mr-3" />

          {error && <Alert variant="danger">{error}</Alert>}

          <Button className="btn btn-block btn-social btn-twitter mt-3" onClick={twitterLogin} disabled={loading}>
            <FontAwesomeIcon className="mt-auto mb-auto ml-1 pr-1" icon={faTwitter} /> Sign in with Twitter
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
