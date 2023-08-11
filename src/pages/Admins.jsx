
const Admins = () => {
  return (
    <div className="admins">
        <h1>Admins</h1>
        <h2>Add new admin</h2>
        <input type="text" placeholder="Enter new admin email" />
        <button className="admins_addbtn">Add admin</button>
        <br />
        <h2>Existing admins</h2>
        <div className="admins_admins">
            <h3>ADMIN email</h3>
            <div className="admins_admin">
                <p>{"email"}</p>
                <p>{"date"}</p>
                <button className="admin_deletebtn">Delete</button>
            </div>
        </div>
    </div>
  )
}
export default Admins;
