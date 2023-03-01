import React, { FC, ReactElement } from 'react';
import { Typography, Box } from '@mui/material';
import { ITaskDescription } from '../../Interfaces/ITaskDescription';
import PropTypes from 'prop-types';

export const TaskDescription: FC<ITaskDescription> = (
    props,
): ReactElement => {
    const { description = 'Hello' } = props;
    return (
        <Box>
            <Typography>{description}</Typography>
        </Box>
    );
};

TaskDescription.propTypes = {
    description: PropTypes.string,
};
