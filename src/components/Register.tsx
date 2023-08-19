import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

interface User {
    name: string,
    email: string,
    phoneNumber: string
}

const Register:React.FC = () => {

    const [ name, setName ] = useState<string>("");
    const [ email, setEmail ] = useState<string>("");
    const [ phoneNumber, setPhoneNumber ] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const data: User = {
            name: name,
            email: email,
            phoneNumber: phoneNumber
        };
        
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/');
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h4">
                    Register
                </Typography>

                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }} >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="name"
                                name="Name"
                                required
                                fullWidth
                                id="Name"
                                label="Name"
                                autoFocus
                                type="text"
                                onChange={e => setName(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="phoneNumber"
                                name="Phone Number"
                                required
                                fullWidth
                                id="phoneNumer"
                                label="Phone Number"
                                autoFocus
                                type="number"
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoComplete="email"
                                name="Email"
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                autoFocus
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3 }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Register;