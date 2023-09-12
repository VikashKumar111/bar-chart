import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js/auto';
import { useState } from 'react';
import { Data } from './utils/Data';
import './App.css';
Chart.register((CategoryScale));

function App() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      }
    ]
  });
  return (
    <div className="App">
      <p>Using Chart.js in React</p>
    </div>
  );
}

export default App;
