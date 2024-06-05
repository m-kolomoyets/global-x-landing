import { createContext, useRef } from 'react';
import type { WithChildren } from '@/types';
import { useSafeContext } from '@/hooks/useSafeContext';

type LocomotiveScrollContextType = {
    locomotiveScroll: LocomotiveScroll;
};

const LocomotiveScrollContext = createContext<LocomotiveScrollContextType | null>(null);
LocomotiveScrollContext.displayName = 'LocomotiveScrollContext';

export const LocomotiveScrollProvider: React.FC<WithChildren<unknown>> = ({ children }) => {
    const locomotiveScrollRef = useRef(new window.LocomotiveScroll());

    return (
        <LocomotiveScrollContext.Provider value={{ locomotiveScroll: locomotiveScrollRef.current }}>
            {children}
        </LocomotiveScrollContext.Provider>
    );
};

export const useLocomotiveScrollContext = () => {
    const context = useSafeContext(LocomotiveScrollContext as React.Context<unknown>);

    return context as LocomotiveScrollContextType;
};
