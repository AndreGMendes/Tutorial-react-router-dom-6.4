import { useLoaderData, Link } from "react-router-dom";

export default function Careers() {
  const careers = useLoaderData();
  console.log(careers);

  return (
    <div className="careers">
      {careers.map((career) => {
        return (
          <Link to={career.id.toString()} key={career.id}>
            <p>{career.title}</p>
            <p>Based in {career.location}</p>
          </Link>
        );
      })}
    </div>
  );
}

// Loarder Function (similar to 'useEffect' hook)
export const careersLoader = async () => {
  const response = await fetch("http://localhost:4000/careers");

  if (!response.ok) {
    throw Error("Could not fetch the careers");
  }

  return response;
};

// Commanda To run the json-server (due to restricted policy execution of Windows)
// npx json-server -p 4000  -w ./data/db.json
