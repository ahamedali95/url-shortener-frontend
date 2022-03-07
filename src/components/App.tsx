import React, {useCallback, useEffect, useState} from 'react';
import {Typography, Grid, Box} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import UrlEntry from './UrlEntry';
import DetailsSection from './DetailsSection';
import {API} from '../api';
import useResource from '../hooks/useResource';
import {IUrl} from '../types';

const useHomeStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    logo: {
        color: theme.palette.primary.main,
        fontWeight: 500,
        textShadow: '2px 2px #000000',
        fontStyle: 'italic'
    }
}));

const App: React.FC = () => {
    const classes = useHomeStyles();
    const [url, setUrl] = useState<string>('');
    const [shortenUrlClick, setShortenUrlClick] = useState<boolean>(false);
    const { loading, data, error, fetch } = useResource<IUrl>(API.url.shortenUrl, false, { url });

    useEffect( (): void => {
        shortenUrlClick && fetch();
        setShortenUrlClick(false);
    }, [shortenUrlClick, fetch]);

    const handleUrlChange = useCallback((value: string): void => {
        setUrl(value);
    }, []);

    const handleShortenUrlClick = useCallback((): void => {
        setShortenUrlClick(true);
    }, []);

    return (
        <Grid
            className={classes.root}
            container
            direction='column'
            spacing={3}
        >
            <Typography
                className={classes.logo}
                variant='h1'
            >
                Shotly
            </Typography>
            <UrlEntry
                detailsLoading={loading}
                handleChange={handleUrlChange}
                handleClick={handleShortenUrlClick}
                value={url}
            />
            <Box mt={2} />
            <DetailsSection
                data={data}
                errorMessage={error?.message}
                loading={loading}
            />
        </Grid>
    );
};

export default App;
