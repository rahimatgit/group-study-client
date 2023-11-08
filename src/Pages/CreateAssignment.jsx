import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateAssignment = () => {

    const [startDate, setStartDate] = useState(new Date());

    const handleCreate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const title = form.get('title');
        const image = form.get('image');
        const marks = form.get('marks');
        const difficulty_level = form.get('difficulty_level');
        const description = form.get('description');
        const due_date = form.get('due_date');

        const data = {email, title, image, marks, difficulty_level, description, due_date};
        console.log(data);

        axios.post('http://localhost:5000/assignments', data)
        .then(res => console.log(res.data))
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center">
            <div className="flex-1">
                <img src="https://img.freepik.com/free-vector/innovation-concept-illustration_114360-5848.jpg?size=626&ext=jpg&ga=GA1.1.336171617.1685084173&semt=sph" alt="" />
            </div>
            <div className="flex-1">
                <form onSubmit={handleCreate} className="card-body">
                    <h2 className="text-3xl font-bold text-center md:text-5xl">Create Assignment Here</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" name="image" placeholder="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" name="marks" placeholder="marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                            <div className="input-group">
                                <select name="difficulty_level" className="w-full select select-bordered">
                                    <option disabled selected>Pick category</option>
                                    <option>easy</option>
                                    <option>medium</option>
                                    <option>hard</option>
                                </select>
                            </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <DatePicker name="due_date" className="w-full input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>    

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Create</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateAssignment;