import Header from "../Components/Header";
import Calendar from "../Components/Calendar";
import CalendarState from "../Components/CalendarContext";
import TaskForm from "../Components/TaskForm";
import '../Styles/Scheduler.css';
export default function Scheduler() {
  
  return (
    <div className="container">
      <CalendarState>
        <Header />
        <Calendar />
        <TaskForm/>
      </CalendarState>
          </div>
  );
}
