import React from 'react';
import { Form } from 'react-bootstrap';

function CurrencyForm() {
    return (
        <Form.Select size='lg' className='currency border-none'>
            <option value='1'>NGN₦</option>
            <option value='2'>GBP£</option>
            <option value='3'>USD$</option>
        </Form.Select>
    );
}

export default CurrencyForm;
