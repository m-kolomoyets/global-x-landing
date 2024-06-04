export type ObjKeys<TObject> = keyof TObject;
export type ObjValues<TObject> = TObject[keyof TObject];

export type WithClassName<TProps> = TProps & {
    /**
        Extendable classnames of component
    */
    className?: string;
};

export type WithChildren<TProps> = TProps & {
    /**
        The content of the component.
    */
    children?: React.ReactNode;
};

export type FCProps<TProps> = WithClassName<WithChildren<TProps>>;
