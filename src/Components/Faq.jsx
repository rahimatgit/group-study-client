

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
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">
                        Click to open this one and close others
                    </div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Faq;