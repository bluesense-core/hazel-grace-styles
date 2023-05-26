import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { CurrencyContext } from './CurrencyContext';

function CurrencyForm() {
    const { selectedCurrency, handleCurrencyChange } =
        useContext(CurrencyContext);

    const handleSelectChange = (e) => {
        handleCurrencyChange(e.target.value);
    };

    return (
        <>
            <Form.Select
                size='lg'
                className='currency ms-4 mb-1 d-sm-block d-none'
                value={selectedCurrency}
                onChange={handleSelectChange}>
                <option value='ngn'>NGN ₦</option>
                <option value='usd'>USD $</option>
                <option value='gbp'>GBP £</option>
                <option value='eur'>EUR €</option>
            </Form.Select>

            <Form.Select
                size='lg'
                className='currency ms-4 mb-1 d-block d-sm-none'
                value={selectedCurrency}
                onChange={handleSelectChange}>
                <option value='ngn'>₦</option>
                <option value='usd'>$</option>
                <option value='gbp'>£</option>
                <option value='eur'>€</option>
            </Form.Select>
        </>
    );
}

export default CurrencyForm;
