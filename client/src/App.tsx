import React, { useState, useEffect } from "react"
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from "react-router-dom"

import Home from "./routes/Home/Home"
import Camera from "./routes/Camera/Camera"

import { API_URL, COLORS } from "./utils/constants"
import DataContext from "./utils/dataProvider"

export default function App() {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    fetch(`${API_URL}/streams`)
      .then((a) => a.json())
      .then(({ data }) =>
        setStreams(
          data.map((item: any, index: number) => ({
            ...item,
            color: COLORS[index % COLORS.length],
          }))
        )
      )
  }, [])

  return (
    <Router>
      <DataContext.Provider value={{ streams }}>
        <div id="app">
          <Route exact path="/" component={Home} />
          <Route
            path="/camera/:name"
            render={({ match }: RouteComponentProps<{ name: string }>) => (
              <Camera name={match.params.name} streams={streams} />
            )}
          />
        </div>
      </DataContext.Provider>
    </Router>
  )
}
