import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { signUp } = useAuth();

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match');
    }
    if (passwordRef.current.value.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    setError('');
    setLoading(true);

    try {
      await signUp(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      return setError('Failed to create an account');
    }

    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 class="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirmation">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmationRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="login">Log In</Link>
      </div>
    </>
  );
}
