import { Dispatch, SetStateAction } from "react";

type inputType = string | number;

const Generic = <T extends inputType>({
    label,
    value,
    setter,
}: {
    label: string;
    value: T;

    setter: Dispatch<SetStateAction<T>>;
}) => {
    return (
        <form>
            <label>{label}</label>
            <input
                type="text"
                value={value}
                onChange={(e) => setter(e.target.value as T)}
            />
        </form>
    );
};

export default Generic;
