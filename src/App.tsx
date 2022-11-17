// import { invoke } from "@tauri-apps/api/tauri";
import { AppProvider } from '@/providers/app'
import React from 'react'
import ReactDOM from 'react-dom/client'

// import './App.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppProvider> </AppProvider>
  </React.StrictMode>
)
