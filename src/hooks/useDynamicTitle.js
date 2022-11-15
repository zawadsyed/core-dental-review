import { useEffect } from "react"
// to set dynamic title
const useDynamicTitle = title => {
    useEffect(() => {
        document.title = `Core Dental-${title}`;
    }, [title])
}
export default useDynamicTitle;