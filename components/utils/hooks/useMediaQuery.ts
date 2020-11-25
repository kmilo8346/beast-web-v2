import { useState, useCallback, useEffect } from 'react';

const useMediaQuery = (mediaArgument: string) => {

    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true);
        } else {
            setTargetReached(false);
        }
    }, []);


    useEffect(() => {
        const media = window.matchMedia(mediaArgument);
        media.addEventListener("change", updateTarget);
        if(media.matches){
            setTargetReached(true);
        }

        return () => media.removeEventListener('change', updateTarget);
    }, [mediaArgument, updateTarget]);

    return targetReached;
};

export default useMediaQuery