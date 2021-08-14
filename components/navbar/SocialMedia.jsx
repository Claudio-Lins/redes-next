import Facebook from "./logos/Facebook";
import Instagram from "./logos/Instagram";
import Linkedin from "./logos/Linkedin";
import Youtube from "./logos/Youtube";
import Phone from "./Phone";

export default function SocialMedia() {
    return (
        <div className="h-10 w-full bg-yellow-600 shadow flex px-2 sm:px-10">
        <div className="flex container mx-auto justify-between">
          <div className="flex items-center space-x-4">
            <Instagram />
            <Youtube />
            <Facebook />
            <Linkedin />
          </div>
          <Phone />
        </div>
      </div>
    )
}