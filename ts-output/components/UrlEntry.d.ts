import React from 'react';
declare type UrlEntryProps = {
    detailsLoading: boolean;
    handleChange: (value: string) => unknown;
    handleClick: () => unknown;
    value: string;
};
declare const UrlEntry: React.FC<UrlEntryProps>;
export default UrlEntry;
