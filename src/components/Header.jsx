import { Phone, Mail } from "lucide-react";

export const Header = () => {
  return (
    <div className="bg-[#262626] text-white py-2 px-4 md:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:+918076464635" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>+971-558626579</span>
          </a>
          <a href="mailto:info@sharpedgeglobal.com@info@sharpedgeglobal.comjcb.com" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>info@sharpedgeglobal.com</span>
          </a>
        </div>
        <div className="text-2xl font-bold tracking-wider">
          SharpEdge
        </div>
      </div>
    </div>
  );
};
