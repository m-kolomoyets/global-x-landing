export const noop = () => {};

export const noopReturnNull = () => {
    return null;
};

export const noopPreventDefault = <TEvent extends React.SyntheticEvent>(event: TEvent) => {
    event.preventDefault();
};

export const intlNumberFormat = (value: number, precision = 2): string => {
    return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: precision,
        maximumFractionDigits: precision,
    }).format(value);
};
