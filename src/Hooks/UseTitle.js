const { useEffect } = require("react")

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Dragon news`;
    }, [title])
};

export default useTitle;