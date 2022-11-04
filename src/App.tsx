
import './App.css';
import { Car } from './Components/Car';
import { Hello } from './Components/Hello';
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
      isSelected: true
    }, 
    {
      name: "Nico Gonzales", 
      jursey: 23, 
      isSelected: false
    }
  ];
  return (
    <div className="App">
      <Hello name="Najmul" taskToFinish={34} american/>
      <Hello name='Joe Biden' taskToFinish={12} american={false}/>
      <Car car={thisCar} />
      <Players playerlist={argentinaTeam} />
    </div>
  );
}

export default App;
