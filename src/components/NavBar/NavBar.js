import React from 'react';
import {Tabs, Tab, Box} from '@mui/material';

export default function NavBar() {
    const [value,
        setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{
            width: '100%'
        }}>
            <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example">
                <Tab value="one" label="Item One"/>
                <Tab value="two" label="Item Two"/>
                <Tab value="three" label="Item Three"/>
                <Tab value="four" label="Item Four"/>
                <Tab value="five" label="Item Five"/>

            </Tabs>
        </Box>
    );
}
