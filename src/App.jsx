import Navbar from './Navbar'
import './App.css'
import Footer  from './Footer.jsx'
import Card from './Card.jsx'
function App() {


  return (
    <>
      <Navbar/>
      <Footer/>
      <div className="card-cont">
      <Card title="This is a heading right?" description="This is a description"/>
      <Card title="This is an another title" description="This is a description right?"/>
      <Card title="This is an another title" description="This is a description right?"/>
      <Card title="This is an another title" description="This is a description right?"/>

      </div>
      
    </>
  )
}

export default App
