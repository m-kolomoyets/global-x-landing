export type ButtonVariant = 'base' | 'link';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /**
        The variant of the button.
    */
    variant?: ButtonVariant;
    /**
        If true, the component will be rendered with tag of child
    */
    asChild?: boolean;
};
