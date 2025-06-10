import { useEffect, useState, useRef } from 'react';

export const useScrollFade = (threshold = 0.1, fadeOutThreshold = 0.8) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Fade in when element comes into view for the first time
                if (entry.isIntersecting && entry.intersectionRatio >= threshold && !hasAnimated) {
                    setIsVisible(true);
                    setIsFadingOut(false);
                    setHasAnimated(true);
                }
                // Fade out when element is mostly out of view (only after it has animated in)
                else if (entry.isIntersecting && entry.intersectionRatio <= fadeOutThreshold && hasAnimated) {
                    setIsFadingOut(true);
                }
                // Keep element visible when it comes back into view (don't reset)
                else if (entry.isIntersecting && entry.intersectionRatio >= threshold && hasAnimated) {
                    setIsVisible(true);
                    setIsFadingOut(false);
                }
            },
            {
                threshold: [0, threshold, fadeOutThreshold, 1],
                rootMargin: '0px 0px -10% 0px'
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold, fadeOutThreshold, hasAnimated]);

    return { elementRef, isVisible, isFadingOut, hasAnimated };
}; 