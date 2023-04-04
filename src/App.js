
import './App.css';
import Helloworld from './Helloworld';
import Helloworldfun from './Helloworldfun';
import Greetcls from './Greetcls';
import Greet from './Greetfun';
import Empdetails from './Empcls';
import Empdetailsfn from './Empfn';
import CondRenderingCls from './Condrend';
import { CondRenderfnUsigfn } from './Condrendfn';

function App() {
  return (
    <div className="App">
      {/*<Helloworld/>*/}
      <Helloworldfun/>
      {/*<Greetcls name="Rahila"/>
      <Greet name="Anjum" degree="Btech"/>*/}
      {/*<Empdetails name="Rahila" empid="CR350" desig="Software Engineer"/>*/}
      {/*<Empdetailsfn name="Anjum" empid="CR351" desig="Software Engineer"/>
      <CondRenderingCls/>
      <CondRenderfnUsigfn/>*/}
    </div>
  );
}

export default App;
