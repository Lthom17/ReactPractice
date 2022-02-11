
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'


function App() {

    const [tcChecked, setTcChecked] = useState(false);

    const popover = (
        <Popover
            id="popover-positioned-right"
        ><Popover.Body>No ice cream will actually be delivered</Popover.Body>
        </Popover>
    )

    const checkboxLabel = (
        <span>
            I agree to the  <OverlayTrigger  placement="right" overlay={popover}>
                <span style={{ color: 'blue' }}>Terms and Conditions</span>
            </OverlayTrigger>

        </span>
    )

    
    return (
        <Form>
            <Form.Group controlId='terms-and-conditions'>
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm Order
            </Button>
        </Form>
    );
}

export default App;