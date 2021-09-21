import React from 'react';

import { Container } from './style';
import Toast from './Toast';
import { ToastMessage } from '../../hooks/Toast';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => (
  <Container>
    {messages.map((message) => (
      <Toast
        key={message.id}
        message={message}
      />

    ))}
  </Container>
);

export default ToastContainer;
