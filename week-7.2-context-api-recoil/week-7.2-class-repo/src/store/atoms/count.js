import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0
});

//selector declaration
export const evenSelector = selector({ //like useMemo()
    key: "evenSelector",
    get: (props) => {
        //logic of dependency
        const count = props.get(countAtom);
        return count % 2;
    }
});

// Todo creation application with filtering logic
// todos, filter