'use client';

import { useEffect, useState } from 'react';

export default function Toast({ message, type = 'success', onClose }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className={`fixed top-6 right-6 z-50 p-4 rounded shadow-lg transition-opacity duration-300
      ${type === 'success' ? 'bg-green-100 text-green-800 border border-green-300' : 'bg-red-100 text-red-800 border border-red-300'}`}>
      {message}
    </div>
  );
}
