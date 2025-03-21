import './App.css'


function Header() {
  return (
    <header>
      <img src="src\assets\react.svg" width="40px" alt="React logo" />

    </header>
  )
}

function MainContent() {
  return (
    <main>
      <h1>Reason I am excited to learn React</h1>
      <ol>
        <li>React is a popular library, so I will be able to fit in with all the coolest devs out there! 😎</li>
        <li>I am more likely to get a job as a front end developer if I know React</li>


      </ol>
    </main>
  )
}

function Footer() {
  return (
    <footer>
      <small>© 2024 Ziroll development. All rights reserved.</small>
    </footer>
  )
}

function App() {
  return (
    <>
      <div className="centered">
        <div className='vertical-centered'>
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
