import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

console.log("Main.tsx: Initializing React root");
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Main.tsx: Root element not found!");
} else {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
