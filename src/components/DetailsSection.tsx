import React from 'react';
import {Typography, Box, Grid, TextField, Button, Paper, CircularProgress} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {Alert} from '@material-ui/lab';
import {IUrl} from '../types';

type DetailsSectionProps = {
    data: IUrl;
    errorMessage: string;
    loading: boolean;
};

const useDetailsSectionStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px',
        width: '60%',
        height: '90%',
    },
    subtitle: {
        fontWeight: 500,
        justifyContent: 'start'
    },
    subTitleContainer: {
        width: '60%',
        marginLeft: theme.spacing(-5)
    },
    shortenedUrl: {
        border: '3px solid #bbb',
        width: '100%'
    },
    copyUrl: {
        width: '100%',
        height: '100%'
    },
    errorMessage: {
        width: '60%'
    }
}));

const DetailsSection: React.FC<DetailsSectionProps> = ({ loading, data, errorMessage }) => {
    const classes = useDetailsSectionStyles();

    return (
        <>
            {
                loading &&
                    <CircularProgress />
            }
            {
                !loading && data &&
                    <>
                        <Grid
                            className={classes.subTitleContainer}
                            container
                            item
                            justifyContent='flex-start'
                        >
                            <Typography
                                className={classes.subtitle}
                                variant='h5'
                            >
                          Here is your shortened URL!
                            </Typography>
                        </Grid>
                        <Paper
                            className={classes.root}
                            elevation={2}
                        >
                            <Grid
                                alignItems='center'
                                container
                                direction="row"
                                item
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    xs={8}
                                >
                                    <TextField
                                        className={classes.shortenedUrl}
                                        disabled
                                        InputProps={{ disableUnderline: true }}
                                        value={data.shortUrl}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                >
                                    <Button
                                        className={classes.copyUrl}
                                        color="primary"
                                        variant="contained"
                                    >
                              Copy URL
                                    </Button>
                                </Grid>
                            </Grid>
                            <Box mt={2} />

                        </Paper>
                    </>
            }
            {
                !loading && errorMessage &&
                    <Alert
                        className={classes.errorMessage}
                        severity="error"
                    >
                        {errorMessage}
                    </Alert>
            }
        </>
    );
};

export default DetailsSection;
