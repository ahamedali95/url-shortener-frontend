import React from 'react';
import { IUrl } from '../types';
declare type DetailsSectionProps = {
    data: IUrl;
    errorMessage: string;
    loading: boolean;
};
declare const DetailsSection: React.FC<DetailsSectionProps>;
export default DetailsSection;
