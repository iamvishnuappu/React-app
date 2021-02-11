import React from 'react';
import fire, {storage} from './fire';


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            url: ""
        }
    }

    logout() {
      fire.auth().signOut();
    }
    async componentDidMount(){
    const user1 = fire.auth().currentUser;
    const ref = fire.storage().ref(`images/${user1.email}`);
    const url = await ref.getDownloadURL(); 
    this.setState({url});
    
    
      }
     
    render() {
        const user = fire.auth().currentUser;
      
        
        
      return (
 
  <body   >
       
            <div class="bg-image"> </div>

        <div class="bg-text">
       
            <div className="row">
            <div className="col-md-4">
            <div className="profile-card-2">
            <img src={this.state.url} className="img img-responsive" width="300px" height="500px" alt="avatar2.png" ></img>
            <div className="profile-name">{user.email}</div>
        <div className="profile-username">{user.email}</div>
        
        
          <button onClick = {this.logout}>Logout</button>
          </div>
         
        </div>

         </div>

            </div>

        
        </body>
        
      )
    }
  }


export default Main;