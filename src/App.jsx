import './App.css'
import Header from './components/Header'
import MainContent from './components/MainComponent'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className="div-centered">
        <div className="div-header">
          <Header />
        </div>
        <div className="div-MainContent">
          <MainContent />
        </div>
        <div className="div-Footer">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
