import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam, unde
        maxime magnam, ut nesciunt, temporibus deserunt perferendis id omnis
        saepe ad cumque aut excepturi ducimus minus assumenda eum asperiores!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
