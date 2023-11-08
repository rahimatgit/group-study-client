import { Link } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {

    const {image, title, marks, difficulty_level, _id} = assignment;

    return (
        <div>
            <div className="card h-[500px]  bg-base-100 shadow-xl">
                <figure><img className="h-[250px] w-full" src={image}  /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">
                        {title}
                    </h2>
                    <p className="text-lg font-bold">Difficulty: <span className="font-normal">{difficulty_level}</span></p>
                    <p className="text-lg font-bold">Marks: <span className="font-normal">{marks}</span></p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-info">View</button>
                        <button className="btn btn-info">
                            <Link to={`/update/${_id}`}>
                                Update
                            </Link>
                        </button>
                        <button className="btn btn-info">Delete</button>
                    
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentCard;