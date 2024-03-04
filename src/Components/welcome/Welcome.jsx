import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';

const Welcome = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [remainingTime, setRemainingTime] = useState(5);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, remainingTime * 1000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, remainingTime]);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <>
      {isVisible && (
        <Alert variant="success" data-testid="welcome-component">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Welcome to the Romance bookstore!
          </p>
          <hr />
          <p className="mb-0">
            This message will disappear in: {remainingTime} second(s)
          </p>
        </Alert>
      )}
    </>
  );
};

export default Welcome;
