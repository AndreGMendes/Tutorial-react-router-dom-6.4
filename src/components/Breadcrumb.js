import { useLocation, Link } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();

  let currentLink = "";
  const crumb = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      console.log(crumb, "--->>", currentLink);

      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="breadcrumb">
      {crumb}
    </div>
  )
}
