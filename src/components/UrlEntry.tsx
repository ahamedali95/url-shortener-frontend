import React, { ChangeEvent, useMemo, memo } from 'react';
import { Typography, Box, TextField, Grid, Button, Paper, FormHelperText } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export type UrlEntryProps = {
    detailsLoading: boolean;
    handleChange: (value: string) => unknown;
    handleClick: () => unknown;
    value: string;
};

const useUrlEntryStyles = makeStyles(() => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        margin: '25px',
        width: '60%',
        height: '90%'
    },
    subtitle: {
        fontWeight: 300
    },
    entry: {
        border: '3px solid #bbb',
        width: '100%'
    },
    entryInvalid: {
        border: '3px solid #FF0000',
        width: '100%'
    },
    submission: {
        width: '100%',
        height: '100%'
    },
    helperText: {
        color: '#FF0000'
    }
}));

const UrlEntry: React.FC<UrlEntryProps> = ({ detailsLoading, value, handleChange, handleClick }) => {
    const classes = useUrlEntryStyles();

    const isUrlValid = useMemo((): boolean => {
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
    }, [value]);

    return (
        <Paper
            className={classes.root}
            elevation={2}
        >
            <Typography
                className={classes.subtitle}
                variant='h4'
            >
                Paste the url to be shortened
            </Typography>
            <Grid
                container
                item
                spacing={1}
            >
                <Grid
                    item
                    xs={9}
                >
                    <TextField
                        className={value ? isUrlValid ? classes.entry : classes.entryInvalid : classes.entry}
                        focused
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
                        value={value}
                        InputProps={{
                            disableUnderline: true,
                            'aria-label': 'urlEntry'
                        }}
                    />
                </Grid>
                <Grid
                    item
                    xs={3}
                >
                    <Button
                        className={classes.submission}
                        color="primary"
                        disabled={detailsLoading || !value || !isUrlValid}
                        onClick={handleClick}
                        variant="contained"
                    >
                        Shorten URL
                    </Button>
                </Grid>
            </Grid>
            { value && !isUrlValid && <FormHelperText className={classes.helperText}>Invalid entry</FormHelperText> }
            <Box mt={2} />
            <Typography
                variant='subtitle1'
            >
                Use this URL Shortener tool to shorten your URL so it is easy to remember. Give it a try!
            </Typography>
        </Paper>
    );
};

export default memo(UrlEntry);
