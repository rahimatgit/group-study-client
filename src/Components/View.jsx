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
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Take Assignment</button>
                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg text-center">Submit Your Assignment!</h3>
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered w-full" />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Assignment PDF</span>
                                        </label>
                                        <input name="pdf" type="text" placeholder="pdf link" className="input input-bordered w-full " />
                                    </div>
                                    <div>
                                        <label className="label">
                                            <span className="label-text">Description</span>
                                        </label>
                                        <textarea name="submittedDescription" placeholder="description" className="textarea textarea-bordered textarea-lg w-full " ></textarea>
                                    </div>
                                    <div className="modal-action">
                                        <button className="btn btn-warning mr-2">Submit</button>
                                        <button className="btn">Cancel</button>
                                    </div>
                                </form>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button onClick={handleSubmit} className="btn btn-warning mr-2">Submit</button>
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn">Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default View;