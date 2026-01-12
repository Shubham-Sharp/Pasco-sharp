

export const QuickActions = () => {
    const actions = [
        { icon: "./icon-products.png", title: "Products", link: "#products" },
        { icon: "./icon-products.png", title: "Book a Machine", link: "#book" },
        // { icon: "./icon-products.png", title: "Book a Service", link: "#service" },
        { icon: "./icon-products.png", title: "Book For Demo", link: "#demo" },
        { icon: "./icon-products.png", title: "Request a Price", link: "#price" },
    ];

    return (
        <div className="bg-[#262626] py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                    {actions.map((action, index) => (
                        <a
                            key={index}
                            href={action.link}
                            className="flex flex-col items-center p-4 md:p-6 bg-white hover:bg-primary/10 rounded-lg transition-all duration-300 hover:scale-105 group"
                        >
                            <div className="w-16 h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center">
                                <img
                                    src={action.icon}
                                    alt={action.title}
                                    className="w-full h-full object-contain filter"
                                />
                            </div>
                            <span className="text-sm md:text-base font-semibold text-center text-card-foreground group-hover:text-primary transition-colors">
                                {action.title}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};
