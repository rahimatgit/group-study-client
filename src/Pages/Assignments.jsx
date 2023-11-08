import axios from "axios";
import { useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    axios.get('http://localhost:5000/assignments')
        .then(res => {
            setAssignments(res.data)
        })

    return (
        <div className="w-[80%] mx-auto mt-12">
            <h2 className="text-5xl font-bold text-center mb-12">Assignments</h2>
            <div className="mt-6 grid grid-cols-1  lg:grid-cols-3 gap-6">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}    
                    >
                    </AssignmentCard>)
                }
            </div>
        </div>
    );
};

export default Assignments;