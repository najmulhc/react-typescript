
import './App.css';
import { Car } from './Components/Car';
import Children from './Components/Children';
import { Hello } from './Components/Hello';
import { Parent } from './Components/Parent';
import { Players } from './Components/Players';
function App() {
  const thisCar = {
    name: "Tesla Model X", 
    cc: 12, 
    country: "United States of America"
  }
  const argentinaTeam = [
    {
      name: 'leo Messi', 
      jursey: 19, 
      isSelected: "Not Selected"
    }, 
    {
      name: "Nico Gonzales", 
      jursey: 23, 
      isSelected: "selected"
    }
  ];


  return (
    <div className="App">
      <Hello name="Najmul" taskToFinish={34} american/>
      <Hello name='Joe Biden' taskToFinish={12} american={false}/>
      <Car car={thisCar} />
      <Players playerlist={argentinaTeam}  completed="On review"/>
      <Parent> 
        <Children ></Children>
      </Parent>
    </div>
  );
}

export default App;
