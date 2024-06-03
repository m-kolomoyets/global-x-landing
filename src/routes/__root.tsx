import { Suspense, lazy } from 'react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import { noopReturnNull } from '@/utils/common';
import { IS_DEV } from '@/constants';

const TanStackRouterDevtools = IS_DEV
    ? lazy(() => {
          return import('@tanstack/router-devtools').then((module) => {
              return {
                  default: module.TanStackRouterDevtools,
              };
          });
      })
    : noopReturnNull;

export const Route = createRootRoute({
    component() {
        return (
            <>
                {/* TODO: add custom fallback */}
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
                <Suspense>
                    <TanStackRouterDevtools />
                </Suspense>
            </>
        );
    },
    // TODO: add custom 404 page
    notFoundComponent() {
        return <p>404 Not Found</p>;
    },
});
