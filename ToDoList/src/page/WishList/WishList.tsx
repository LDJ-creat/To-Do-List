
// import './WishList.css'
// const WishList = () => {
//     return(
//         <div className='WishList'>
//              <button className='WishListBack'></button>
//              <div className='Wish-grid'>

//              </div>
//         </div>
//     )
// }
// export default WishList;
import React from 'react';

interface Task {
    id: number;
    title: string;
    description: string;
  }
const TaskList: React.FC = () => {
  const tasks: Task[] = [
    { id: 1, title: 'Task 1', description: 'This is task 1 description.' },
    { id: 2, title: 'Task 2', description: 'A longer description for task 2.' },
    { id: 3, title: 'Task 3', description: 'A third task description.' },
    // { id: 3, title: 'Task 4', description: 'A fourth task description.A fourth task descriptionA fourth task descriptionA fourth task description grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr);' },
 { id: 4, title: 'Task 4', description: 'A fourth task description.A fourth task descriptionA fourth task descriptionA fourth task description grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr); grid-template-columns: repeat(2, 1fr);' },
//  { id: 5, title: 'Task 5A fourth task description', description: 'A fifth task description.' },
//  { id: 6, title: 'Task 6', description: 'A sixth task description.' },
//  { id: 7, title: 'Task 7', description: 'A seventh task description.' },
    // 添加更多任务
  ];

  return (
    <div className="task-grid">
      {tasks.map(task => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          {task.description}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
