import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-[#262626] text-white py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <div className="text-3xl font-bold mb-4 border-2 border-orange-400 inline-block px-4 py-2">
                            SharpEdge
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Leading JCB equipment dealer providing quality construction machinery and excellent customer service.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="hover:text-primary transition-colors">Products</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Customer Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Parts</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2">
                                <Phone className="h-5 w-5 text-[#f90] flex-shrink-0 mt-0.5" />
                                <a href="tel:+918076464635" className="hover:text-primary transition-colors">
                                    +91 8076464635
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-5 w-5 text-[#f90] flex-shrink-0 mt-0.5" />
                                <a href="mailto:pasco@pascojcb.com" className="hover:text-primary transition-colors">
                                    info@sharpedgeglobal.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-[#f90] flex-shrink-0 mt-0.5" />
                                <span>Meydan Grandstand, 6th floor, 
Meydan Road, Nad Al Sheba,
Dubai, United Arab Emirates</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-muted pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} SharpEdge All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
