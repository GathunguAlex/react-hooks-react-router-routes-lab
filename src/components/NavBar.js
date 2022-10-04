import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
 display: "inline-block",
 width: "50px",
 padding: "12px",
 margin: "0 6px 6px",
 background: "blue",
 textDecoration: "none",
 color: "black",
};

function NavBar() {
 return( <div className="navbar">
   <NavLink 
   to = "/"
   exact
   style={linkStyles}
   activeStyle = {{
     backgroundColor: "darkcyan"
   }}>
     Home
   </NavLink>

   <NavLink 
   to = "/movies"
   exact
   style={linkStyles}
   activeStyle = {{
     backgroundColor: "darkcyan"
   }}>
     Movies
   </NavLink>

   <NavLink 
   to = "/directors"
   exact
   style={linkStyles}
   activeStyle = {{
     backgroundColor: "darkcyan"
   }}>
     Directors
   </NavLink>

   <NavLink 
   to = "/actors"
   exact
   style={linkStyles}
   activeStyle = {{
     backgroundColor: "darkcyan"
   }}>
     Actors
   </NavLink>

 </div>);
}

export default NavBar;
