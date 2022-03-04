import { useEffect, useState } from "react"

const usePath = () => {
    const [path, setPath] = useState('/')

    useEffect(() => {
        setPath(window.location.href.replace(process.env.REACT_APP_URL as string, ''))
    }, [window.location.href])

    return { path }
}

export default usePath;