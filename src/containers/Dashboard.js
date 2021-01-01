import React, { useState } from 'react';

import { Alert, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const twitterHandle = localStorage.getItem('twitterHandle');

  const [error, setError] = useState('');

  const history = useHistory();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to logout');
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <p>
            <strong>Handle: </strong>
            {twitterHandle}
          </p>
          <p>
            <strong>Name: </strong>
            {currentUser.displayName}
          </p>
        </Card.Body>
        <div className="w-100 text-center">
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </div>
      </Card>
    </>
  );
}
