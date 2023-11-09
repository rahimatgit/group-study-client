

const Faq = () => {
    return (
        <div className="w-[80%] mx-auto mt-12">
            <h2 className="text-3xl text-center font-bold mb-8 md:text-6xl">Any Questions?</h2>
            <div className=" flex flex-col md:flex-row">
            <div>
                <img className="h-[500px]" src="https://assets-global.website-files.com/5f0d7ff1afcb6aeeb0ccf28d/64b659836d473034eefce80a_anonimous.webp" alt="" />
            </div>
            <div className="flex-1">
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" checked="checked" />
                    <div className="collapse-title text-xl font-medium">
                    What is AssignMate?
                    </div>
                    <div className="collapse-content">
                        <p>AssignMate is an online platform designed to facilitate collaborative group study. It allows users from diverse countries to create and join assignments on a wide range of subjects and topics. AssignMate aims to provide a virtual environment where students and learners can collaborate, share knowledge, and enhance their understanding through group study sessions.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How can I create an assignment on AssignMate?
                    </div>
                    <div className="collapse-content">
                        <p>Creating an assignment on AssignMate is simple. After signing up or logging in to your account, click on the "Create Assignment" button. You'll be prompted to fill in assignment details, such as the topic, description, and preferred study schedule. You can then invite other users to join your assignment, making it easy to coordinate study sessions with peers.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Is AssignMate free to use?
                    </div>
                    <div className="collapse-content">
                        <p>Yes, AssignMate is free to use! We believe in providing accessible and inclusive study opportunities for everyone. There are no hidden costs or subscription fees. Simply sign up and start collaborating with fellow learners on our platform without any financial commitment.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    Can I use AssignMate on my mobile device?
                    </div>
                    <div className="collapse-content">
                        <p>Absolutely! AssignMate is designed to be mobile-responsive. You can access our platform on your smartphone or tablet by visiting our website in your mobile browser. This allows you to participate in assignments, schedule study sessions, and communicate with your study group on the go.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                    How can I find assignments related to a specific topic or subject?
                    </div>
                    <div className="collapse-content">
                        <p>To find assignments on a specific topic or subject, you can use our search feature. Simply enter keywords related to the topic you're interested in, and AssignMate will display a list of relevant assignments. You can also explore our "Browse Assignments" section to discover a wide variety of assignments across different subjects.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;