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
    const [activeTab, setActiveTab] = useState(3);
    const updateFilterValue = ({key, value}) => {
        setFilterValue(filter => ( {...filter, ...{[key]: value, set: true}}))
    }

    const resetFilter = () => {
        setFilterValue(_ => ({...defaultFilterValue}))
    }
    const updateActiveTab = (activeValue) => {
        setActiveTab((prev) => activeValue);
        console.log(`updated active tab = ${activeTab}`);
    }
    return (
        <PostFilterContext.Provider value={{filterValue, updateFilterValue, resetFilter,activeTab, updateActiveTab}}>
            {children}
        </PostFilterContext.Provider>
    )
}