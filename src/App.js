import './App.css';
import Intro from './Intro.js'
import About from './About.js'
import Skills from './Skills.js'
import Education from './Education.js'
import Exp from './Exp.js'
import Awards from './Awards.js'
import Contacts from './Contacts.js'
import Feedbacks from './Feedbacks.js';
import Form from './Form.js'

function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Skills/>
      <Exp/>
      <Education/>
      <Awards/>
      {/* <Feedbacks/> */}
      <Form/>
      <Contacts/>
    </div>
  );
}

export default App;
