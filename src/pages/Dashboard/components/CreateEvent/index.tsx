import CreateCriteria from "../CreateCriteria";
import AddEventDetails from "./AddEventDetails";
import SetVotes from "./AddEventDetails/SetVotes";
import {useState} from 'react'
import AddMembers from "./AddMembers";

const CreateEvents = () => {
    const [onNext, setOnNext] = useState(0);
    const forms = [
        <AddEventDetails />,
        <SetVotes />,
        <AddMembers/>,
        <CreateCriteria/>
    ]
    const handleNextBtn = (e) => {
        e.preventDefault()
        setOnNext(onNext + 1)
    }
    return ( 
        <form action="">
            {forms[onNext]}
            <div>
                <button className="bg-purple text-white p-3" onClick={handleNextBtn}>Next</button>
            </div>
        </form>
     );
}
 
export default CreateEvents;