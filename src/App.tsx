import { useState } from "react";
import "./App.css";

// import Box from "./components/Box";
// import Generic from "./components/Generic";

interface IPerson {
    name: string;
    age: number;
}

function App() {
    // const [value, setValue] = useState<string>("");

    const [user, setUser] = useState<IPerson>();

    return (
        <>
            {/* <Box
                // children={<>child </>}
                heading="tushar"
                // count="5"
                func={(a: string) => {
                    alert(a);
                }}
            >
                {/* {"children "} */}
            {/* <button>click</button> */}
            {/* </Box > * /} */}

            {/* <Generic label="tushar" value={value} setter={setValue} /> */}

            <form>
                <input
                    type="number"
                    value={user?.age}
                    onChange={(e) =>
                        setUser((prev) => {
                            return { ...prev!, age: e.target.value };
                        })
                    }
                />
            </form>
        </>
    );
}

export default App;
