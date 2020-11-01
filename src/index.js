import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// Service worker
serviceWorker()
