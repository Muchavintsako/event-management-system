import { useParams } from "react-router-dom";

export default function EventDetails(){

    const {id}=useParams();

    return(

        <div style={{padding:"40px"}}>

            <h1>Event {id}</h1>

        </div>

    )

}