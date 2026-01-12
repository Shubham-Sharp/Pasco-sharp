export const ContentSection = () => {
    return (
        <section className="bg-[#262626] py-12 md:py-20 text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  mb-4">
                        BEST JCB EQUIPMENT DEALERS
                    </h2>
                    <p className="text-base md:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                        For outstanding JCB authorized dealer network and first-rate customer service, JCB is well-known across the world.
                        In order to satisfy its customers' needs, JCB has created sturdy, inventive and robust equipment & solutions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        {
                            title: "Quality Equipment",
                            description: "We provide top-quality JCB construction equipment built for durability and performance.",
                        },
                        {
                            title: "Expert Service",
                            description: "Our certified technicians ensure your equipment stays in peak operating condition.",
                        },
                        {
                            title: "Customer Support",
                            description: "24/7 customer support to help you with any queries or service requirements.",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white text-black p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto bg-[#f90]">
                                <span className="text-2xl font-bold text-white">{index + 1}</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-black mb-3 text-center">
                                {item.title}
                            </h3>
                            <p className="text-muted-foreground text-center leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
