import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { IProfile } from '../../Interfaces/IProfile';

export const Profile: FC<IProfile> = (
    props,
): ReactElement => {
    const { name = 'John' } = props;
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
        >
            <Avatar
                sx={{
                    width: '96px',
                    height: '96px',
                    backgroundColor: 'primary.main',
                    marginBottom: '16px',
                }}
            >
                <Typography
                    variant="h4"
                    color="text.primary"
                >
                    {`${name.substring(0, 1)}`}
                </Typography>
            </Avatar>
            <Typography variant="h6" color="text.primary">
                {`Hi ${name}`}
            </Typography>
            <Typography
                variant="body1"
                color="text.primary"
            >
                This is your task manager
            </Typography>
        </Box>
    );
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
};
