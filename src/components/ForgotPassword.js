import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';

export default function ForgotPassword() {
  const emailRef = useRef();

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { resetPassword } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();

    setMessage('');
    setError('');
    setLoading(true);

    try {
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      return setError('Failed to reset password');
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 class="text-center mb-4">Password Reset</h2>
          {message && <Alert variant="success">{message}</Alert>}
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Reset Password
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/login">Log In</Link>
      </div>
    </>
  );
}
