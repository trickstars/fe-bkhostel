import { createContext, useContext, useState } from "react";

const defaultFilterValue = {
    page: null,
    set: false,
    type: null,
    price: {
        selectedText: "",
        minValue: null,
        maxValue: null
    },
    area: {
        selectedText: "",
        minValue: null,
        maxValue: null
    }
}

const PostFilterContext = createContext(null)

export const usePostFilterContext = () => useContext(PostFilterContext)

export const PostFilterContextProvider = ({children}) => {
    const [filterValue, setFilterValue] = useState(defaultFilterValue)
    
    const updateFilterValue = ({key, value}) => {
        setFilterValue(filter => ( {...filter, ...{[key]: value, set: true}}))
    }

    const resetFilter = () => {
        setFilterValue(_ => ({...defaultFilterValue}))
    }

    return (
        <PostFilterContext.Provider value={{filterValue, updateFilterValue, resetFilter}}>
            {children}
        </PostFilterContext.Provider>
    )
}