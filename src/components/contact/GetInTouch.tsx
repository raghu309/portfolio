import EmailSVG from "../icons/EmailSVG";
import LocationSVG from "../icons/LocationSVG";
import ProfileSVG from "../icons/ProfileSVG";

const GetInTouch = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
        <p className="text-gray-300 leading-relaxed">
          I would love to connect with you! Whether it's for collaboration
          opportunities, exciting projects, or just to say hello, feel free to
          reach out :)
        </p>
      </div>
      <div className="space-y-6">
        <div className="flex items-center">
          <ProfileSVG />
          <div>
            <span className="font-bold text-white block">Name</span>
            <span className="text-gray-300">Raghu</span>
          </div>
        </div>
        <div className="flex items-center">
          <LocationSVG />
          <div>
            <span className="font-bold text-white block">Address</span>
            <span className="text-gray-300">Bangalore</span>
          </div>
        </div>
        <div className="flex items-center">
          <EmailSVG />
          <div>
            <span className="font-bold text-white block">Email</span>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ragavendrarag30@gmail.com"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              ragavendrarag30@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
