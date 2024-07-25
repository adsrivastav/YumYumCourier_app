import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {FoodProvider} from './Context/food-context.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <FoodProvider>
      <App />
    </FoodProvider>
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
