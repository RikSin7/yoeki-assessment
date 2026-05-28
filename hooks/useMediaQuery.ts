'use client';
import { useState, useEffect } from 'react';

export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const media = window.matchMedia(query);
        // Set initial value
        if (media.matches !== matches) {
            //eslint-disable-next-line
            setMatches(media.matches);
        }

        // Listen for resize events
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);

        return () => window.removeEventListener('resize', listener);
    }, [matches, query]);

    return matches;
};