

const Featured = () => {
    return (
        <div className="mt-12 w-[80%] mx-auto">
            <h2 className="text-center text-3xl md:text-6xl font-bold">
                Why AssignMate?
            </h2>
            <p className="text-xl font-medium text-center my-6">Have a glimpse of our key features.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card ">
                    <figure className="px-5 pt-10 h-[300px]">
                        <img src="https://img.freepik.com/free-vector/hand-drawn-essay-illustration_23-2150316925.jpg?w=740&t=st=1699293503~exp=1699294103~hmac=4da250081be64c291f5c8243b33aa5560dd4076bc0dd46c60581b6cbde61948c" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Assignment Creation</h2>
                        <p>Users can easily create assignments on a variety of topics, including setting objectives, deadlines, and assignment descriptions.</p>
                       
                    </div>
                </div>
                <div className="card  ">
                    <figure className="px-5 pt-10 h-[300px]">
                        <img src="https://img.freepik.com/free-vector/illustration-international-diverse-people_53876-40772.jpg?w=900&t=st=1699293642~exp=1699294242~hmac=6b2d3232d737bd8574fd47b33aaa78ca6de72462cdff8f65391167eeb0bce4d4" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Global Community</h2>
                        <p> Connect with learners from diverse countries, fostering a multicultural environment for collaborative learning.</p>
                        
                    </div>
                </div>
                <div className="card ">
                    <figure className="px-5 pt-10 h-[300px]">
                        <img src="https://img.freepik.com/free-vector/online-review-concept-illustration_114360-1398.jpg?w=740&t=st=1699294159~exp=1699294759~hmac=dd56583ad470eef9496c24d68a4ad7ce6d3246080329e7da839c34cc76e7814d" alt="Shoes" className="rounded-full" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Peer Review and Feedback</h2>
                        <p>Enable users to provide feedback on each other's assignments, promoting constructive criticism and improvement</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;