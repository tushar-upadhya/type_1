import { ReactNode } from "react";

type PropsType = {
    heading: string;
    count?: string;
    children: ReactNode;

    func?: (a: string) => void;
};

const Box = ({ heading, count = "8", func, children }: PropsType) => {
    // func("string");

    return (
        <div>
            {heading}
            {count && <p>{count}</p>}
            {children}
        </div>
    );
};

export default Box;
