const Dashboard = () => {
    return ( 
        <div>
            <h2>Check the Weather</h2>
            <form className="d-flex mb-3" action={"/weather"} method="get">
                 
                <input type="text" className="form-control me-2" placeholder="Enter city..." />
                <button className="btn btn-primary">Search</button>
                
            </form>
            <div className="card">
                <div className="card-body">
                <h5>Weather Results</h5>
                <p>Weather info will appear here...</p>
                </div>
            </div>
        </div>
     );
}
 
export default Dashboard;