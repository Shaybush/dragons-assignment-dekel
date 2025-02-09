import { useEffect, useState } from "react";

export const useDebouncer = (query: string, timer: number) => {
    const [value, setValue] = useState<string>(query);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setValue(query)
        }, timer);

        return () => clearTimeout(timeoutId)
    }, [query, timer])

    return value
}