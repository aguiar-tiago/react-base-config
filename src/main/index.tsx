import React from 'react';
import { ReactDOM } from 'react';
import { createRoot } from 'react-dom/client';
import HelloWorld from './app';

const root = createRoot(document.getElementById('main'));

root.render(<HelloWorld />);