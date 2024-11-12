
import { Pie } from'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSelector ,useDispatch } from 'react-redux';
import './PieChart.css'
import { useEffect,useState } from 'react';
Chart.register(...registerables);

interface Task {
  id: string;
  event: string;
  completed: boolean;
  is_cycle: boolean;
  description: string;
  importanceLevel:number;
  completed_Date: string;
}



const PieChart: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [taskLabel,setTaskLabel]=useState([]);
  const [chartData,setChartData]=useState([]);
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskDescription, setNewTaskDescription] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    let tempLabel:any=[];
    let tempData:any=[];
    //运用等比数列
    if(tasks.length>0){
    let a1=100/(Math.pow(1.6,tasks.length)-1)
    tasks.map((task: Task) => {
      tempLabel.push(task.event);
    });

    for (let i = 0; i < tasks.length; i++){
      
      tempData.push(a1*Math.pow(1.6,i));
    }
    setTaskLabel(tempLabel);
    setChartData(tempData);
  }else{
    setTaskLabel([]);
    setChartData([]);
  }
  }, [tasks]);


   const data={
    labels: taskLabel,
    datasets: [
      {
        label: 'To Do List',
        data:chartData ,
        backgroundColor: ['#F6B45DED'],

        hoverOffset: 4,

 
}
    ],

  };

  const options = {
    plugins: {
      legend: {
        display: false
      },
      datalabels: {
        display: false
      },
      radius:'50%'
    }
  };


  return (
    <div className='PieChart'>
      <div className='chart-container'>
      <Pie data={data}  options={options} />
      </div>

     </div>
  );
};

export default PieChart;