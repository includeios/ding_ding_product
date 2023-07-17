import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/pages/App.tsx'
import '@/assets/css/common.less'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
