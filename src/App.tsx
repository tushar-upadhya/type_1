import "./App.css";

import Box from "./components/Box";

function App() {
    return (
        <>
            <Box
                heading="tushar"
                count="5"
                func={(a: string) => {
                    alert(a);
                }}
            />
        </>
    );
}

export default App;
