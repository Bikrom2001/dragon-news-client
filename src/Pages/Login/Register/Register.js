import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photos = form.photos.value;
    const email = form.email.value;
    const password = form.password.value;



    createUser(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        handleUpdateUserProfile(name, photos);
        handleEmailVerfication();
        toast.success('please verify your email address.')
      })
      .catch(error => {
        console.log(error)
        setError(error.message)
      });

  }

  const handleUpdateUserProfile = (name, photos) => {
    const profile ={
      displayName: name,
      photoURL: photos
    }
    updateUserProfile(profile)
    .then(()=> {

    })
    .catch(error => console.log(error))
  }

  const handleEmailVerfication = () => {
    verifyEmail()
    .then(() => {

    })
    .catch(error => console.error(error))
  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type="text" placeholder="Your Name" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL </Form.Label>
        <Form.Control name='photos' type="text" placeholder="Photos URL" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name='email' type="email" placeholder="Enter email" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type="password" placeholder="Password" required />
        <Form.Text className="text-danger">
          {error}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox"
        onClick={handleAccepted} 
        label={<>Accept <Link to='/terms'>Terms and conditions</Link></>}
        />
      </Form.Group>
      <Button className='text-center w-25 mx-auto' disabled={!accepted} variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
};

export default Register;