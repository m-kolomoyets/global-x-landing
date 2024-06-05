import { useRef, useCallback } from 'react';
import { LOCK_SCROLL_Y_CLASS_NAME } from '@/constants';

/**
 * Hook to lock the scroll of the document when needed.
 * @returns The object containing the functions to
 * - lock
 * -  unlock the scroll of the document
 * - the function to check if the scroll of the document is locked.
 */
const useDocumentLockScrollY = (isScrollbarHidden = false) => {
    const documentRef = useRef<HTMLElement | null>(document.documentElement);
    const scrollTopRef = useRef<number>(0);

    const lockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (!$html) {
            return;
        }

        scrollTopRef.current = $html.scrollTop ? $html.scrollTop : document.body.scrollTop;

        requestAnimationFrame(() => {
            $html.style.top = `${-scrollTopRef.current}px`;
            $html.classList.add(LOCK_SCROLL_Y_CLASS_NAME);
            isScrollbarHidden && $html.classList.add('scrollbar-hide');
        });
    }, [isScrollbarHidden]);

    const unlockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (!$html) {
            return;
        }

        const scrollTop = parseInt(scrollTopRef.current.toString());

        requestAnimationFrame(() => {
            $html.classList.remove(LOCK_SCROLL_Y_CLASS_NAME);
            isScrollbarHidden && $html.classList.remove('scrollbar-hide');
            $html.style.removeProperty('top');
            $html.scrollTop = scrollTop;
            document.body.scrollTop = scrollTop;
        });
    }, [isScrollbarHidden]);

    const checkIsLockDocumentScrollY = useCallback(() => {
        const $html = documentRef.current;

        if (!$html) {
            return false;
        }

        const isLockingScrollY = $html.classList.contains(LOCK_SCROLL_Y_CLASS_NAME);

        return isLockingScrollY;
    }, []);

    return { lockDocumentScrollY, unlockDocumentScrollY, checkIsLockDocumentScrollY };
};

export default useDocumentLockScrollY;
