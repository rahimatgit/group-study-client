import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";


const View = () => {

    const viewDetail = useLoaderData();
    const { _id, email, title, image, marks, difficulty_level, description, due_date } = viewDetail;

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const pdf = form.get('pdf');
        const submittedDescription = form.get('submittedDescription');

        const submittedAssignment = { email, title, image, marks, difficulty_level, description, due_date, pdf, submittedDescription };
        console.log(submittedAssignment);
        
        axios.post('https://assignment-11-group-study-server.vercel.app/submitted', submittedAssignment)
        .then(res => console.log(res.data))
    }

    return (
        <div className="w-[80%] mx-auto mt-12">
            <div className="flex flex-col md:flex-row bg-base-100 shadow-xl">
                <figure className=""><img className="p-5 max-h-[400px]" src={image} alt="Album" /></figure>
                <div className="flex-1 p-5">
                    <h2 className="text-3xl mb-6 font-bold text-center">{title}</h2>
                    <span className="flex gap-2 my-4 justify-between">
                        <p className="font-bold">Marks: {marks}</p>
                        <p className="font-bold">Difficulty: {difficulty_level}</p>
                        <p className="font-bold">Due Date: {due_date}</p>
                    </span>
                    <p>{description}</p>
                    <div className="card-actions justify-center mt-6">
                        {/* <button className="btn btn-primary">
                            <Link to={`/take/${_id}`}>Take assignment</Link>
                        </button> */}
                        {/* You can open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_3" className="modal">
                            <div className="modal-box">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg text-center">Submit Your Assignment</h3>
                                <form onSubmit={handleSubmit} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name="pdf" type="text" placeholder="pdf" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <textarea name="submittedDescription" placeholder="description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-warning">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;