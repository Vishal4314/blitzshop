import "./Sidebar.css";
import logo from "../../assets/logo.png"


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
       <div className= { sidebarOpen? "sidebar-responsive" : ""  } id="sidebar">
           <div className= "sidebar__title">
              <div className= "sidebar__img">
                <img src= {logo} alt="logo" />
                <h1>Blitzkreig</h1>
              </div>   
              <i 
              className= "fa fa-times" 
              id="sidebarIcon" 
              aria-hidden= "true"
              onClick= {() => closeSidebar()}></i>
           </div>
           <div className= "sidebar__menu"> 
             <div className= "sidebar__link active_menu_link">
                <i className="fa fa-home"></i>
                <a href= "#">Home</a>
             </div>
             <h2>Product</h2>
             <div className= "sidebar__link">
                 <i className="fa fa-user-secret" aria-hidden="true"></i>
                 <a href= '#'>Products Details</a>
             </div>
             <div className= "sidebar__link">
                <i className= "fa fa-building-o" ></i>
                <a href= "#">Order Details</a>
             </div>
             <div className= "sidebar__link">
                 <i className= "fa fa-wrench"></i>
                 <a href= "#">Payments Details</a>
             </div>
             <h2>Account</h2>
             <div className= "sidebar__link">
                 <i className= "fa fa-question"></i>
                 <a href= "#">Manage</a>
             </div>
             <div className= "sidebar__link">
                 <i className= "fa fa-sign-out"></i>
                 <a href= "#">Customers</a>
             </div>
             <div className= "sidebar__link">
                 <i className= "fa fa-calendar-check-o"></i>
                 <a href= "#">Appearance</a>
             </div>
             <div className= "sidebar__link">
                 <i className= "fa fa-files-o"></i>
                 <a href= "#">Plugins</a>
             </div>
             <h2>Offers</h2>
             <div className= "sidebar__link">
                 <i className= "fa fa-money"></i>
                 <a href= "#">Discounts</a>
             </div>
             <div className= "sidebar__link">
                 <i className= "fa fa-briefcase"></i>
                 <a href= "#">Sales</a>
             </div>
             <div className= "sidebar__logout">
                 <i className= "fa fa-power-off"></i>
                 <a href= "#">Log out</a>
             </div>
           </div>
       </div>
    )
}

export default Sidebar;