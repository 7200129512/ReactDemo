
import  {Uservalidation}  from "./uservalidation";
//import 'bootstrap/dist/css/bootstrap.css';
export default function Userform()
{

    const savedata=(event)=>{
      event.preventDefault();
      const formdatas={ username:  event.target[0].value,
        email:  event.target[1].value,
        phoneno:  event.target[2].value,       
        
    }
    const usercheck=Uservalidation.isValid(formdatas);
    console.log(usercheck);
    //formdata;
    }
    return (<div>
        <h1><center>Login Page</center></h1>
        <form >
        <form>
            <div class="container">
  <div class="mb-3 col-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3 col-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
            {/* <label>username:</label>
            <input  type="text"></input><br/><br/><br/>
            <label>email:</label>
            <input type="text"></input><br/><br/><br/>
            <label>phoneno:</label>
            <input type="text"></input><br/><br/><br/>
            <input type="submit" className="btn btn-success" value="submit"></input> */}
            
        </form>
    </div>)
}