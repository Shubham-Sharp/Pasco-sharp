import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-400 via-accent to-orange-500 py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                        We&apos;re here to help with all your construction equipment needs
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        
                        {/* Contact Form */}
                        <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200">
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                            First Name
                                        </label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            placeholder="John"
                                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="Equipment inquiry"
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Tell us about your project requirements..."
                                        className="w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-orange-400 focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-md transition-all"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 text-white shadow-lg">
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Address</h3>
                                            <p>123 Construction Avenue<br />Industrial District<br />City, State 12345</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Phone</h3>
                                            <p>+1 (555) 123-4567</p>
                                            <p>+1 (555) 765-4321</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Mail className="h-6 w-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <p>info@pascojcb.com</p>
                                            <p>sales@pascojcb.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Clock className="h-6 w-6 mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Business Hours</h3>
                                            <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                                            <p>Sat: 9:00 AM - 4:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center border border-gray-300">
                                <div className="text-center text-gray-500">
                                    <MapPin className="h-12 w-12 mx-auto mb-2" />
                                    <p>Map Location</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-16 bg-gradient-to-r from-primary to-accent">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Need Urgent Assistance?
                    </h2>
                    <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                        Our emergency support team is available 24/7 for urgent equipment needs
                    </p>
                    <a
                        href="tel:+15559990000"
                        className="inline-block bg-white text-orange-600 font-semibold px-6 py-3 rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                        Call Emergency Line: +1 (555) 999-0000
                    </a>
                </div>
            </section>

        </div>
    );
};

export default Contact;
