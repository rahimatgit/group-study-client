import axios from "axios";
import { useEffect, useState } from "react";
import AssignmentCard from "../Components/AssignmentCard";
import { useLoaderData } from "react-router-dom";


const Assignments = () => {

    const [assignments, setAssignments] = useState([]);
    const { count } = useLoaderData();
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(0);
    const numberOfPages = Math.ceil(count / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()];

    // console.log(count, numberOfPages);
    // console.log(pages);

    // useEffect(() => {
    //     axios.get(`https://assignment-11-group-study-server.vercel.app/assignments?`)
    // }, [])

    const inputField = document.getElementById('difficulty');
    // const difficulty = inputField.value;
    console.log(inputField);
    // console.log(difficulty);


    useEffect(() => {
        axios.get(`https://assignment-11-group-study-server.vercel.app/assignments?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                setAssignments(res.data)
            })
    }, [currentPage, itemsPerPage])

    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="w-[80%] mx-auto mt-12">
            <h2 className="text-5xl font-bold text-center mb-12">Assignments</h2>
            <form>
            <div className="input-group w-1/3 mx-auto">
                <select  id="difficulty" name="difficulty" className="w-full select select-bordered">
                    <option disabled selected>Pick category</option>
                    <option>easy</option>
                    <option>medium</option>
                    <option>hard</option>
                </select>
            </div>
            </form>
            <div className="mt-6 grid grid-cols-1  lg:grid-cols-3 gap-6">
                {
                    assignments.map(assignment => <AssignmentCard
                        key={assignment._id}
                        assignment={assignment}
                    >
                    </AssignmentCard>)
                }
            </div>

            {/* pagination */}
            <div className="flex gap-4 justify-center items-center">
                <div className='my-12 text-center'>
                    <button onClick={handlePrevPage} className='btn mr-5'>Previous</button>
                    {
                        pages.map(page => <button
                            className={currentPage === page ? 'bg-orange-500 text-white btn btn-primary mx-3' : undefined}
                            onClick={() => setCurrentPage(page)}
                            key={page}
                        >{page}</button>)
                    }
                    <button onClick={handleNextPage} className='btn mx-5'>Next</button>
                </div>
                <div>
                    <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Assignments;