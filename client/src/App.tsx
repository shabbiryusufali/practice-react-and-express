
import React from 'react';
import './App.css';

function App() {

  const [userData, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("/get_users")
    .then((res) => { return res.json()})
    .then((data) => {
      // data.map((user: { username: any, first: any, last: any; }) => ({
      //   username: user.username,
      //   first: user.first,
      //   last: user.last
      // }))
      setData(data.listOfUsers)
    })
    
  }, [])
  var users:any = [];
  userData.forEach(user => {
    if(user){
      console.log(user)
      users.push(user);
    }
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src="react.png" className="App-logo" alt="logo" />
          <h2>
            List Of Saved Users
          </h2>
        <ul>
          {
          users[0] ? users.map((user:any) => {
            <li>{user.username}</li>
          }) : <li>There are no items to show</li>
          }
        </ul>
    <form
      method="post"
      action='/add_user'
      >
      <label htmlFor='uname'>Username: </label>
      <input id='uname' name='uname' type='text' />
      <br />
        <label htmlFor='fname'>First Name: </label>
        <input id='fname' name='fname' type='text' />
        <br />
        <label htmlFor='lname'>Last Name: </label>
        <input id='lname' name='lname' type='text' />
        <br />
        <input type="submit" />
    </form>

      </header>
    </div>
  );
}

export default App;
