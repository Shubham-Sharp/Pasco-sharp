import { Building2, Users, Award, Target } from "lucide-react";

const AboutUs = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-400 via-accent to-orange-500 py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
                        About SharpEdge
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto">
                        Leading provider of premium construction equipment and machinery solutions
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">JCB Excavators</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                These are heavy construction equipment used for digging, excavation,
                              demolition, and material handling tasks and also used for a wide range of applications like construction, mining, forestry, & agriculture.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">JCB Electric Scissors</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                It is used to provide safe and efficient access to elevated work areas. It supports workers and their equipment while they perform tasks at heights that would be difficult or unsafe to access otherwise.
                                forestry, & agriculture.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">JCB Telehandler</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Telescopic handlers, also known as telehandlers, are versatile machines used for material handling and 
                                lifting tasks in construction, agriculture, and industrial settings.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">Wheeled loaders</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Wheeled loaders, also known as front-end loaders or bucket loaders, are heavy equipment machines used in construction, mining,
                               and agriculture for a variety of material handling tasks.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">Mini Excavators</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Mini excavators are compact, tracked or wheeled construction equipment used for digging and excavation tasks in tight or confined spaces. These are designed for 
                                digging and excavation tasks in confined spaces.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">Skid Steer Loaders</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Skid steer loaders are compact, manoeuvrable machines that are commonly used for material
                                 handling and construction tasks in tight or confined spaces.
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Target className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">JCB Super Loader</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The JCB Super Loader is the perfect blend of power, utility, and performance in one versatile machine. Designed as a material handling 
                                solution that caters to multiple industrial needs..
                                Maximum Engine Power kW(hp)
36.4(49.5)
Dump Height (m)
3.1- 4.0
Maximum Loader Capacity (kg)
900-1000
                            </p>
                        </div>
                        <div className="bg-card border border-gray-300 rounded-lg p-8 hover:shadow-lg transition-shadow">
                            <Award className="h-12 w-12 text-[#f90] mb-4" />
                            <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                To be the most trusted name in construction equipment, recognized for our
                                commitment to excellence, customer satisfaction, and sustainable business practices
                                that shape the industry&apos;s future.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Values */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
                        Our Core Values
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {[
                            { title: "Quality", description: "Premium equipment and service excellence" },
                            { title: "Reliability", description: "Dependable solutions you can trust" },
                            { title: "Innovation", description: "Cutting-edge technology and methods" },
                            { title: "Integrity", description: "Honest and transparent relationships" },
                        ].map((value, index) => (
                            <div key={index} className="bg-card border border-gray-300 rounded-lg p-6 text-center hover:shadow-lg transition-all hover:-translate-y-1">
                                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {[
                            { icon: Building2, number: "25+", label: "Years Experience" },
                            { icon: Users, number: "5000+", label: "Happy Clients" },
                            { icon: Award, number: "50+", label: "Equipment Models" },
                            { icon: Target, number: "98%", label: "Client Satisfaction" },
                        ].map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div key={index} className="text-center">
                                    <Icon className="h-12 w-12 text-[#f90] mx-auto mb-4" />
                                    <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
                                    <div className="text-muted-foreground">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-12">
                        Why Choose SharpEdge
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            {
                                title: "Expert Team",
                                description: "Highly trained professionals with decades of combined experience in construction equipment."
                            },
                            {
                                title: "Premium Equipment",
                                description: "Latest JCB models and cutting-edge machinery to meet all your construction needs."
                            },
                            {
                                title: "24/7 Support",
                                description: "Round-the-clock customer service and technical support to keep your projects running."
                            },
                        ].map((item, index) => (
                            <div key={index} className="bg-card border border-gray-400 rounded-lg p-8 hover:shadow-lg transition-shadow">
                                <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
