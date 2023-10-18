import {useState,useEffect} from 'react'
import axios from 'axios';
import "./App.css";
import Navbar from "./component/Navbar";
import Ticket from "./component/Ticket";

function App() {
  
  const [data,setData] = useState(null);
  const [dataStatePriority,setDataStatePriority] = useState({
    Todo:[],
    Inprogress:[],
    Backlog:[],
    Done:[],
    Cancelled:[]
  });

  useEffect(() =>{
    const fetchData = async () => {
        const endpoint = 'https://api.quicksell.co/v1/internal/frontend-assignment';
        const response = await axios.get(endpoint);

        if (response) {
          const dataa = response.data;
          setData(dataa);
          console.log(data)
          const tickets = dataa.tickets
          const users = dataa.users
          console.log('Data fetched successfully:', tickets);
          console.log('Data fetched successfully:', users);
          const ticketcount = tickets.length
          const taskbystatethenpriority = {
            Todo:[],
            Inprogress:[],
            Backlog:[],
            Done:[],
            Cancelled:[]
          }
          for(var i = 0;i<ticketcount;i++){
              if(tickets[i].status==="Todo") taskbystatethenpriority.Todo.push(tickets[i])
              else if(tickets[i].status==="In progress") taskbystatethenpriority.Inprogress.push(tickets[i])
              else if(tickets[i].status==="Backlog") taskbystatethenpriority.Backlog.push(tickets[i])
              else if(tickets[i].status==="Done") taskbystatethenpriority.Done.push(tickets[i])
              else if(tickets[i].status==="Cancelled") taskbystatethenpriority.Cancelled.push(tickets[i])
          }
          
          taskbystatethenpriority.Todo.sort((a, b) => a.priority - b.priority);
          taskbystatethenpriority.Inprogress.sort((a, b) => a.priority - b.priority);
          taskbystatethenpriority.Backlog.sort((a, b) => a.priority - b.priority);
          taskbystatethenpriority.Done.sort((a, b) => a.priority - b.priority);
          taskbystatethenpriority.Cancelled.sort((a, b) => a.priority - b.priority);
          setDataStatePriority(taskbystatethenpriority)
          console.log(taskbystatethenpriority)
        } 
        else {
          console.log('Request was not successful. Status code:', response.status);
        }
    };
    fetchData();
  },[]);

  
  return (
    <div>
      <Navbar />
      <div className="panel">
        <div className="backlog">
          <h6>Backlog  {dataStatePriority?.Backlog?.length}</h6>
          {dataStatePriority?.Backlog?.map((item, index) => (
            <Ticket key={index} item={item} />
          ))}
        </div>
        <div className="todo">
          <h6>Todo {dataStatePriority?.Todo?.length}</h6>
          {dataStatePriority?.Todo?.map((item, index) => (
            <Ticket key={index} item={item} />
          ))}
        </div>
        <div className="inprogress">
          <h6>In Progress {dataStatePriority?.Inprogress?.length}</h6>
          {dataStatePriority?.Inprogress?.map((item, index) => (
            <Ticket key={index} item={item} />
          ))}
        </div>
        <div className="done">
          <h6>Done {dataStatePriority?.Done?.length}</h6>
          {dataStatePriority?.Done?.map((item, index) => (
            <Ticket key={index} item={item} />
          ))}
        </div>
        <div className="cancelled">
          <h6>Cancelled {dataStatePriority?.Cancelled?.length}</h6>
          {dataStatePriority?.Cancelled?.map((item, index) => (
            <Ticket key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default App;
