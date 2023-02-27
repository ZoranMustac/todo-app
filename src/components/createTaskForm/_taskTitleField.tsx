import React, { FC, ReactElement } from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import { ITextField } from '../../Interfaces/ITextField';

export const TaskTitleField: FC<ITextField> = (
    props,
): ReactElement => {
    const {
        onChange = (e) => console.log(e),
        disabled = false,
    } = props;

    return (
        <TextField
            id="title"
            name="title"
            label="Task Title"
            placeholder="Task Title"
            variant="outlined"
            size="small"
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
    );
};

TaskTitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
};
