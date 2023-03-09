
import {useState} from "react";

function Wednesday(){

    const [loggedIn, setLoggedIn] = useState(false); //boolean - true or false

    return (
        <>
            {
                 loggedIn ? 
                    <div className="greenBG">
                        <h3>You are logged in</h3>
                        <button onClick={()=> setLoggedIn(false)}>Log out</button>
                    </div>
                 :
                 <div className="redBG">
                 <h3>Please log in</h3>
                 <button onClick={()=> setLoggedIn(true)}>Log in</button>
                 </div>

            }
            <h1>Today is Wednesday</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem dolore veritatis maxime dignissimos quis! Deleniti tenetur numquam explicabo ducimus! Laborum perferendis corporis deleniti fuga amet repellendus quibusdam aut asperiores impedit?
            </p>
        </>
    )
}

export default Wednesday;
