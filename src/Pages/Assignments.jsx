import axios from "axios";
import { useState } from "react";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);

    axios.get('http://localhost:5000/assignments')
    .then(res => {
        setAssignments(res.data)
    })

    return (
        <div>
            <h2>Number of assignments: {assignments.length}</h2>
        </div>
    );
};

export default Assignments;