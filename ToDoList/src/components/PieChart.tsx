
import { Pie } from'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
// import './PieChart.css'
import { useSelector } from 'react-redux';
import './PieChart.css'
import { MAX_VERTICAL_CONTENT_RADIUS } from 'antd/es/style/placementArrow';
import { useEffect,useState } from 'react';
Chart.register(...registerables);

interface Task {
  id: number;
  name: string;
  description: string;
}




const PieChart: React.FC = () => {
  const tasks = useSelector((state: any) => state.tasks.tasks);
  const [taskLabel,setTaskLabel]=useState([]);
  const [chartData,setChartData]=useState([]);
  useEffect(() => {
    let tempLabel:any=[];
    let tempData:any=[];
    let a1=200/tasks.length;
    tasks.map((task: Task) => {
      tempLabel.push(task.name);
    });

    for (let i = 0; i < tasks.length; i++){
      tempData.push((2*i+1)*a1);
    }
    setTaskLabel(tempLabel);
    setChartData(tempData);
  }, [tasks]);

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
  const options = {
    plugins: {
      labels: {
        anchor: 'center',
        align: 'center',
        color: '#000',
        formatter: (context: any) => context.chart.data.labels[context.dataIndex],
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    height: 150,
    width: 150,
    MAX_VERTICAL_CONTENT_RADIUS: 150,
  };


  return (
    <div className='PieChart'>
      <Pie data={data}  options={options} />
      {/* <canvas ref={chartRef} /> */}
      {/* <button onClick={updateData}>更新数据</button> */}
      <button></button>
      <div>“今天吃掉了{tasks.length}快披萨！”</div>
      <button>增加任务</button>
      <button>心愿社区</button>
    </div>
  );
};

export default PieChart;