import { Link, useLoaderData, useParams } from "react-router-dom";

const CareersDetails = () => {
  const { id } = useParams();

  const career = useLoaderData();
  console.log(career);

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <p className="details">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed,
        voluptatem.
      </p>
      <Link to="/careers">
        <button type="button">Go Back</button>
      </Link>
    </div>
  );
};

export default CareersDetails;

// Loader Function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`http://localhost:4000/careers/${id}`);

  return response.ok
    ? response.json()
    : Promise.reject(new Error("Could not find that career"));
};
