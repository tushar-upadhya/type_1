type PropsType = {
    heading: string;
    count?: string;

    func: (a: string) => void;
};

const Box = ({ heading, count, func }: PropsType) => {
    func("string");

    return (
        <div>
            {heading}
            <p>{count}</p>
        </div>
    );
};

export default Box;
