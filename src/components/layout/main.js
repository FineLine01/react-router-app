import { Outlet } from "react-router-dom";

function MainLayout(props){
    return (
      <div className="main-layout">
            <header>
                <ul>
                    <li><a href="#">Monday</a></li>
                    <li><a href="#">Tuesday</a></li>
                    <li><a href="#">Wednesday</a></li>
                    <li><a href="#">Thursday</a></li>
                    <li><a href="#">Friday</a></li>
                </ul>
            </header>

            {Outlet}

      </div> 
    )
}
export default MainLayout;