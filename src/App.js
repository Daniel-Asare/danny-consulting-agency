import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from 'components/pages/Navbar';
import PageLayout from 'components/pages/PageLayout';
import Homepage from 'components/pages/Homepage';
import Footer from 'components/pages/Footer';
import About from 'components/pages/About';
import Services from 'components/pages/Services';
import Contact from 'components/pages/Contact';

function App() {
  return (
    <>
      <Router>
    <Navbar/>
    <PageLayout>
     <Route path='/' exact component={Homepage}/>
     <Route path='/about' exact component={About}/>
     <Route path='/services' exact component={Services}/>
     <Route path='/contact' exact component={Contact}/>
    </PageLayout>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
