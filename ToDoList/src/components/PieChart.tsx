
import { Pie } from'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useSelector ,useDispatch } from 'react-redux';
import './PieChart.css'
import { MAX_VERTICAL_CONTENT_RADIUS } from 'antd/es/style/placementArrow';
import { useEffect,useState } from 'react';
import { addTask } from '../Store.ts';
Chart.register(...registerables);

interface Task {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
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
    // let a1=200/tasks.length;
    if(tasks.length>0){
    let a1=100/(Math.pow(1.6,tasks.length)-1)
    tasks.map((task: Task) => {
      tempLabel.push(task.name);
    });

    for (let i = 0; i < tasks.length; i++){
      // tempData.push((i+1)*a1);
      tempData.push(a1*Math.pow(1.6,i));
    }
    setTaskLabel(tempLabel);
    setChartData(tempData);
  }else{
    setTaskLabel([]);
    setChartData([]);
  }
  }, [tasks]);

  const handleAddTask = () => {
    if (newTaskName.trim()!== '') {
      const newTask: Task = {
        id: Date.now(),
        name: newTaskName,
        description: newTaskDescription,
        isCompleted: false,
      };
      dispatch(addTask(newTask));
      setNewTaskName('');
      setNewTaskDescription('');
    }
  };

   const data={
    labels: taskLabel,//如何让label显示在中间，而不是在左侧？
    datasets: [
      {
        label: 'To Do List',
        data:chartData ,
        backgroundColor: ['#F6B45DED'],

        hoverOffset: 4,

 
}
    ],

  };
  // const options = {
  //   plugins: {
  //     labels: {
  //       anchor: 'center',
  //       align: 'center',
  //       color: '#000',
  //       formatter: (context: any) => context.chart.data.labels[context.dataIndex],
  //     },
  //   },
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   height: 150,
  //   width: 150,
  //   MAX_VERTICAL_CONTENT_RADIUS: 150,
  // };
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
      {/* <canvas ref={chartRef} /> */}
      {/* <button onClick={updateData}>更新数据</button> */}
      <button></button>
      <div>“今天吃掉了{tasks.length}快披萨！”</div>
      <button onClick={handleAddTask}>增加任务</button>
      <input
          type="text"
          placeholder="任务名称"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="任务描述"
          value={newTaskDescription}
          onChange={(e) => setNewTaskDescription(e.target.value)}
        />
      <button>心愿社区</button>
    </div>
  );
};

export default PieChart;