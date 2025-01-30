import { createContext, useContext, useState } from 'react';

const MetricContext = createContext();

export function useMetrics() {
    return useContext(MetricContext)
}


export function MetricsProvider({children}) {
    const [aspect, setAspect] = useState(0);
    const [length, setLength] = useState(0);
    const [resolution, setResolution] = useState(0);

    return (

        <MetricContext.Provider value={{aspect, length, resolution, setAspect, setLength, setResolution}}>
            {children}
        </MetricContext.Provider>

    )
}