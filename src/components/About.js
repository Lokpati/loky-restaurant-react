import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const About = () => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    fetchGithubUserDetails();
  }, []);

  const fetchGithubUserDetails = async () => {
    const data = await fetch("https://api.github.com/users/loky-sfa");
    const json = await data.json();

    setUserDetails(json);
  };

  return userDetails === null ? (
    <Shimmer />
  ) : (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <ul className="list-disc pl-6">
          <li className="text-lg text-gray-700">
            Loky-sfa, also known as{" "}
            <span className="font-bold">{userDetails.login}</span> (or Lokpati
            Tripathi)
          </li>
          <li className="text-lg text-gray-700">
            Talented backend developer with expertise in PHP, Node.js, MySQL,
            and SQL
          </li>
          <li className="text-lg text-gray-700">
            Proficient in client-side scripting with JavaScript
          </li>
          <li className="text-lg text-gray-700">
            Good knowledge of React and Tailwind CSS
          </li>
          <li className="text-lg text-gray-700">
            Passionate about coding and constantly expanding their skillset
          </li>
          <li className="text-lg text-gray-700">
            Enjoys building efficient and user-friendly web applications
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
