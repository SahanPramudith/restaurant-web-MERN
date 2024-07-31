import React from 'react';
import { Container, Typography, TextField, Box, Button } from '@mui/material';

function Form() {
    return (
        <div>
            <Container maxWidth="sm" >
                <Box my={4} >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Contact Us
                    </Typography>
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        name="name"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        name="email"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" color="primary" type="submit">
                        Submit
                    </Button>
                </Box>
            </Container>
        </div>
    );
}

export default Form;