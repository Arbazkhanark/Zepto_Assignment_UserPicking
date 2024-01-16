import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import UserPick from "./components/UserPick"
import PageNotFound from "./components/PageNotFound"



const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<UserPick/>} />
        <Route path={"*"}  element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
