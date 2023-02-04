import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleGoogleLogin = (response) => {
    setIsLoggedIn(true);
    console.log('Google Login Successful', response);
  };

  return (
    <div>
      {!isLoggedIn && (
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={handleGoogleLogin}
        />
      )}

      {isLoggedIn && (
        <div>
          <h1>Home Page</h1>
          <p>Welcome to your portfolio tracker app!</p>
        </div>
      )}
    </div>
  );
};

export default App;
