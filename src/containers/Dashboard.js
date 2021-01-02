import React, { useEffect, useState } from 'react';

import { Alert, Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import axios from 'axios';

import { useAuth } from '../contexts/authContext';

export default function Dashboard() {
  const { currentUser, logout } = useAuth();
  const twitterHandle = localStorage.getItem('twitterHandle');

  const [error, setError] = useState('');

  const [message, setMessage] = useState('');

  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      const dataResponse = await axios.get('https://dev3l-learning-journal.herokuapp.com/ping');
      const message = dataResponse.data;

      setMessage(message);
    }
    fetchData();
  }, []);

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
          {message && (
            <p>
              <strong>Server Message: </strong>
              {message}
            </p>
          )}
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
