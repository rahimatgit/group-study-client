
import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";

const Update = () => {

    const [startDate, setStartDate] = useState(new Date());
    const update = useLoaderData();
    console.log(update);
    const {_id ,email, title, image, marks, difficulty_level, description, due_date} = update;

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const title = form.get('title');
        const image = form.get('image');
        const marks = form.get('marks');
        const difficulty_level = form.get('difficulty_level');
        const description = form.get('description');
        const due_date = form.get('due_date');

        const updatedAssignment = {email, title, image, marks, difficulty_level, description, due_date};
        console.log(updatedAssignment);

        axios.put(`https://assignment-11-group-study-server.vercel.app/assignments/${_id}`, updatedAssignment)
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
                <form onSubmit={handleUpdate} className="card-body">
                    <h2 className="text-3xl font-bold text-center md:text-5xl">Update Assignment Here</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" defaultValue={email} name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" defaultValue={title} name="title" placeholder="title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input type="text" defaultValue={image} name="image" placeholder="image" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Marks</span>
                        </label>
                        <input type="text" defaultValue={marks} name="marks" placeholder="marks" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Difficulty Level</span>
                        </label>
                        <div className="input-group">
                            <select defaultValue={difficulty_level} name="difficulty_level" className="w-full select select-bordered">
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
                        <textarea defaultValue={description} name="description" placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Date</span>
                        </label>
                        <DatePicker defaultValue={due_date} name="due_date" className="w-full input input-bordered" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;