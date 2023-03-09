import Pizza from "../pages/pizza.js";
function Tuesday(){
   
    return (
        <>
            <h1>Today is Tuesday</h1>
            <p>
                🍕Pizza?
            </p>
            <Pizza 
                name="Cheese pizza 😍"
                ingredients={["🧀cheese", "🍅Tomato"]}
            />

<Pizza 
                name="Hawaiian pizza 🏝"
                ingredients={["🧀cheese", "🍅Tomato","🍍pineapple" ]}
            />

<Pizza 
                name="Pepperoni pizza 🥵"
                ingredients={["🧀cheese", "🍅Tomato","🌶Chilli Pepper" ]}
            />

            
        </>
    )
}
export default Tuesday;