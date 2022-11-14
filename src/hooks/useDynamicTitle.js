import { useEffect } from "react"

const useDynamicTitle = title => {
    useEffect(() => {
        document.title = `Core Dental-${title}`;
    }, [title])
}
export default useDynamicTitle;