import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
    component() {
        return <h1>hello</h1>;
    },
});
