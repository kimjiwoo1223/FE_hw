import Day from "./componenet/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import {Routes, Route} from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/create_word" element={<CreateWord />} />
                <Route path="/create_day" element={<CreateDay />} />
                <Route path="*" element={<EmptyPage />} />
            </Routes>
        </div>
    );
}