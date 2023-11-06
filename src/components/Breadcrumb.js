import { useLocation, Link, NavLink } from "react-router-dom";


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
      {crumb.length === 0 ? (
        <>
          <span>&gt;</span>{<NavLink to="/"> <i>home</i></NavLink>}
        </>
      ) : (
        <>
          <span>&gt;</span>{crumb}
        </>
      )}
    </div>
  )
}
