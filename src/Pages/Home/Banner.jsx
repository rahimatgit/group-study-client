
const Banner = () => {
    return (
        <div className="w-[90%] mx-auto flex flex-col-reverse md:flex-row bg-black rounded-lg">
            <div className="flex-1 pt-8">
                <img className="max-h-[650px]" src="https://assets-global.website-files.com/5f0d7ff1afcb6aeeb0ccf28d/64b54ee56899c9e4de851b63_people.webp" alt="" />
            </div>
            <div className="flex-1 px-4">
                <div className="space-y-8 mt-10">
                 <h2 className="text-2xl font-bold md:text-5xl text-gray-300">Welcome to</h2>   
                <h2 className="text-4xl font-bold md:text-7xl text-gray-300">Assign<span className="text-blue-500">Mate</span></h2>
                <h4 className="text-2xl font-semibold  md:text-4xl text-gray-300">Study with students from <br /> <span className="text-blue-500">all over the world!</span></h4>
                <p className="text-xl font-medium text-gray-300"><span className="font-bold">Welcome to AssignMate,</span> your ultimate destination for collaborative online learning! Our platform empowers students and learners from around the world to connect and engage in enriching group study experiences. With AssignMate, you can create and participate in assignments on a wide range of topics, fostering a global community of knowledge sharing.  </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;