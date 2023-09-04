import "./App.css";

import Box from "./components/Box";

function App() {
    return (
        <>
            <Box
                // children={<>child </>}
                heading="tushar"
                // count="5"
                func={(a: string) => {
                    alert(a);
                }}
            >
                {/* {"children "} */}
                <button>click</button>
            </Box>
        </>
    );
}

export default App;
