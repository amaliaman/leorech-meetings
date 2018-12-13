import React from 'react';
import Responsive from 'react-responsive';

export const MobileView = props => <Responsive {...props} maxWidth={767} />;
export const DefaultView = props => <Responsive {...props} minWidth={768} />;