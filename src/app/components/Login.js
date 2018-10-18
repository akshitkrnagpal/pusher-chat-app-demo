import React, { Component } from 'react';
import { Grid, Form, Button } from 'semantic-ui-react';

class Login extends Component {
    render() {
        return (
            <Grid textAlign = 'center'>
                <Grid.Column style = {{ maxWidth: 450 }} >
                    <Form size = 'large'>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='Enter Username' />
                        <Button color='teal' fluid size='large'>
                            Login
                        </Button>
                    </Form>
                </Grid.Column>
            </Grid>
        );
    }
}

export default Login;
