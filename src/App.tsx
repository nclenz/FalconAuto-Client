import { BrowserRouter, Routes, Route } from "react-router-dom"
import PublicLayout from "./pages/PublicLayout"
import Public from "./components/Public"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Public />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
