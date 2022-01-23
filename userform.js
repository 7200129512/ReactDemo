
import  {Uservalidation}  from "./uservalidation";
export default function Userform()
{

    const savedata=(event)=>{
      event.preventDefault();
      const formdatas={ username:  event.target[0].value,
        email:  event.target[1].value,
        phoneno:  event.target[2].value,       
        
    }
    const usercheck=Uservalidation.isValid(formdatas);
    console.log(usercheck)
    //formdata
    }
    return (<div>
        <h1>welcome</h1>
        <form onSubmit={savedata}>
            <label>username:</label>
            <input type="text"></input><br/><br/><br/>
            <label>email:</label>
            <input type="text"></input><br/><br/><br/>
            <label>phoneno:</label>
            <input type="text"></input><br/><br/><br/>
            <input type="submit" value="submit"></input>
        </form>
    </div>)
}