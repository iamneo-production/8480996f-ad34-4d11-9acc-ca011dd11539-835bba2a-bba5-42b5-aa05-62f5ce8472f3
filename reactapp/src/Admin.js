import react from 'react'
import './Admin.css'


function Admin() {
  const data = [
    { language: 'Education', learners: 500 },
    { language: 'StoryBook', learners: 200 },
    
  ];
  const progress = 60;

  return (

    <>
   
      <div className="App">
        <header className="App-heer">
          <h1>Admin Dashboard</h1>
        </header>
        <div className="bos">
          <button className="bab1">Number Of Users</button>
          <button className="bab2">Languages</button>
          <button className="bab3">Leader Board</button>
          <button className="bab4">User Progress</button>
          <button className="bab5">Feedback</button>
          <button className="bab6">Home</button>
        </div>

        <div className="abos">
          <div className="chart">
            {data.map((item, index) => (
              <div className="bar" key={index}>
                <div className="bar-label">{item.language}</div>
                <div className="bar-fill" style={{ width: `${item.learners / 15}px` }}>
                  {item.learners}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pbos">
          <div className="progress-tracker">
            <h2 className="tracker-title">Progress Tracker</h2>
            <p className="progress-label"> Completetion Status</p>

          </div>
        </div>

        <div className="bbos">

        </div>
        <div className="images-container">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
            className="image"

          />
          <h2 className="ana">Admin Name</h2>
          <p className="pan">Email: admin@example.com</p>
          <p className="ran">Role: Administrator</p>

        </div>
   

      </div>

    </>
  )

}
export default Admin;