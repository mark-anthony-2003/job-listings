import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { JobFilterProvider } from './context/JobFilterProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <JobFilterProvider>
    <App />
  </JobFilterProvider>,
)
