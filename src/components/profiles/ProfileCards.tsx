import Section from "../Section";
import profileData from "../../data/profileData";

const ProfileCards = () => {
  return (
    <Section id="profiles" title="My Profiles">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {profileData.map((profile, index) => (
          <a
            key={index}
            href={profile.link}
            target="_blank"
            className="flex flex-col card-hover-effect bg-gray-800 p-4 rounded-lg border border-gray-700"
          >
            <div>
              <h3 className="text-xl font-bold text-white">{profile.name}</h3>
              <p className="text-gray-400">{profile.description}</p>
            </div>
            <div className="m-auto pt-4">
              <img
                src={profile.image}
                className="w-full h-auto rounded-md object-cover"
              />
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default ProfileCards;