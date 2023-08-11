import {Link} from 'react-router-dom';

function Sidepanel ()
{
    return(
        <div className="side_panel">
            <Link className="side_items"><div class="side_panel_icon"><img  src="./assets/commerce.png"/></div> Admin</Link>
            <Link to="/" className="side_items"><div class="side_panel_icon"><img  src="./assets/dashboard.png"/></div> Dashboard</Link>
            <Link to="/products" className="side_items"><div class="side_panel_icon"><img  src="./assets/products.png"/></div> Products</Link>
            <Link to="/categories" className="side_items"><div class="side_panel_icon"><img  src="./assets/categories.png"/></div> Categories</Link>
            <Link to="/orders" className="side_items"><div class="side_panel_icon"><img  src="./assets/orders.png"/></div> Orders</Link>
            <Link to="/admins" className="side_items"><div class="side_panel_icon"><img  src="./assets/admins.png"/></div> Admins</Link>
            <Link to="/settings" className="side_items"><div class="side_panel_icon"><img  src="./assets/gear.png"/></div> Settings</Link>
            <Link className="side_items"><div class="side_panel_icon"><img  src="./assets/switch.png"/></div> Logout</Link>
        </div>
    )
}
export default Sidepanel;