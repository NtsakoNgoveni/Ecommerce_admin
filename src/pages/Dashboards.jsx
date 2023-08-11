function Dashboard () 
{
    return(
        <div className="dashboard page">
            <div className="dash_nav">
                <p>Hello, <b>{'Ntsako'}</b></p>
                <div className="user_alias">{'NN'}</div>
            </div>
            <h2>Orders</h2>
            <div className="dash_orders">
                <div className="dash_order_items">
                    <p className="dash_day">Today</p>
                    <p className="dash_ordernum">2</p>
                    <p className="dash_statement">2 orders today</p>
                </div>
                <div className="dash_order_items">
                    <p className="dash_day">This Week</p>
                    <p className="dash_ordernum">20</p>
                    <p className="dash_statement">20 orders this week</p>
                </div>
                <div className="dash_order_items">
                    <p className="dash_day">This month</p>
                    <p className="dash_ordernum">53</p>
                    <p className="dash_statement">5312451 orders this month</p>
                </div>
            </div>
            <h2>Revenue</h2>
            <div className="dash_revenue dash_orders">
            <div className="dash_revenue_items dash_order_items">
                    <p className="dash_day"></p>
                    <p className="dash_ordernum "></p>
                    <p className="dash_statement"></p>
                </div>
                <div className="dash_revenue_items dash_order_items">
                    <p className="dash_day"></p>
                    <p className="dash_ordernum "></p>
                    <p className="dash_statement"></p>
                </div>
                <div className="dash_revenue_items dash_order_items">
                    <p className="dash_day"></p>
                    <p className="dash_ordernum "></p>
                    <p className="dash_statement"></p>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;