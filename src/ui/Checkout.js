import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Button, Col, Form } from 'react-bootstrap';
import { PaystackButton } from 'react-paystack';
export default function Checkout({ formatter }) {
    const { totalItems, items, cartTotal, emptyCart } = useCart();

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    const publicKey = 'pk_live_52618125cff02760cb4a111f58caa27a8981ecfa';
    const amount = cartTotal * 100; // Remember, set in kobo!
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');

    const componentProps = {
        email,
        amount,
        metadata: {
            name,
            phone,
            country,
            state,
            address,
        },
        publicKey,
        text: 'Place Order',
        onSuccess: () => {
            emptyCart();
        },
    };

    return (
        <main>
            <div className='checkout' id='checkout'>
                <section className='py-5'>
                    <div className='container px-4 px-lg-5 my-5'>
                        <div className='row'>
                            <div className='col-lg-4  order-lg-2 mb-4 pb-lg-0 pb-5'>
                                <h4 className='mb-3 d-flex justify-content-between align-items-center mb-3'>
                                    <span className='text-muted text-uppercase'>
                                        Order Summary
                                    </span>
                                    <span className=' badge  bg-dark py-2'>
                                        <span className='text-white text-center'>
                                            {totalItems}
                                        </span>
                                    </span>
                                </h4>
                                <ul className='list-group mt-4'>
                                    {items.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className=' d-flex justify-content-between align-items-center lh-condensed py-3'>
                                                <div className='d-flex align-items-center justify-content-start'>
                                                    <div className='w-50 position-relative'>
                                                        <img
                                                            className=' cart-item__image1 w-75  rounded-3'
                                                            src={item.src}
                                                            alt={item.alt}
                                                        />
                                                        <span className=' badge rounded-circle gold-badge '>
                                                            <span className='text-white px-1 lh-lg'>
                                                                {item.quantity}
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <h6 className='my-0'>
                                                            {item.alt}
                                                        </h6>
                                                        <small className='text-muted'>
                                                            ₦
                                                            {formatter.format(
                                                                item.price
                                                            )}
                                                        </small>
                                                    </div>
                                                </div>
                                                <span className='text-muted'>
                                                    ₦
                                                    {formatter.format(
                                                        item.price *
                                                            item.quantity
                                                    )}
                                                </span>
                                            </li>
                                        );
                                    })}

                                    <li className=' border-bottom border-top px-2 py-2 d-flex justify-content-between'>
                                        <span>Total</span>
                                        <strong>
                                            ₦{formatter.format(cartTotal)}
                                        </strong>
                                    </li>
                                </ul>

                                {/* <form className='card p-2'>
                                    <div className='input-group'>
                                        <input
                                            type='text'
                                            className='form-control me-2'
                                            placeholder='Promo code'
                                        />
                                        <div className='input-group-append'>
                                            <button
                                                type='button'
                                                className='btn btn-dark px-4 rounded-pill'>
                                                Redeem
                                            </button>
                                        </div>
                                    </div>
                                </form> */}
                            </div>
                            <div className='col-lg-8 order-lg-1'>
                                <h4 className='mb-3 text-uppercase'>
                                    Billing address
                                </h4>
                                <Form
                                    className='needs-validation mt-4'
                                    noValidate
                                    validated={validated}
                                    onSubmit={handleSubmit}>
                                    <div className=''>
                                        <div className='mb-3'>
                                            <label
                                                htmlFor='firstName'
                                                className='form-label'>
                                                Name
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='name'
                                                placeholder=''
                                                required
                                                onChange={(e) =>
                                                    setName(e.target.value)
                                                }
                                            />

                                            <Form.Control.Feedback
                                                type='invalid'
                                                className='invalid-feedback'>
                                                Valid name is required.
                                            </Form.Control.Feedback>
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='email'
                                            className='form-label'>
                                            Email{' '}
                                            {/* <span className='text-muted'>
                                                (Optional)
                                            </span> */}
                                        </label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            id='email'
                                            placeholder='you@example.com'
                                            required
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                        />
                                        <div className='invalid-feedback'>
                                            Please enter a valid email address
                                            for shipping updates.
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='phone'
                                            className='form-label'>
                                            Phone Number{' '}
                                            {/* <span className='text-muted'>
                                                (Optional)
                                            </span> */}
                                        </label>
                                        <input
                                            type={'tel'}
                                            className='form-control'
                                            id='tel'
                                            placeholder=''
                                            required
                                            onChange={(e) =>
                                                setPhone(e.target.value)
                                            }
                                        />
                                        <small className='text-muted'>
                                            Include your country code
                                        </small>
                                        <div className='invalid-feedback'>
                                            Please enter a valid phone number
                                            for shipping updates.
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='address'
                                            className='form-label'>
                                            Address
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='address'
                                            placeholder='1234 Main St'
                                            required
                                            onChange={(e) =>
                                                setAddress(e.target.value)
                                            }
                                        />
                                        <div className='invalid-feedback'>
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div className='mb-3'>
                                        <label
                                            htmlFor='address2'
                                            className='form-label'>
                                            Address 2{' '}
                                            <span className='text-muted'>
                                                (Optional)
                                            </span>
                                        </label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            id='address2'
                                            placeholder='Apartment or suite'
                                        />
                                    </div>

                                    <div className='row'>
                                        <div className='col-md-5 mb-3'>
                                            <label
                                                htmlFor='country'
                                                className='form-label'>
                                                Country
                                            </label>
                                            <select
                                                className='form-select d-block w-100'
                                                id='country'
                                                required
                                                onChange={(e) =>
                                                    setCountry(e.target.value)
                                                }>
                                                <option value=''>
                                                    Choose...
                                                </option>
                                                <option>Nigeria</option>
                                            </select>
                                            <div className='invalid-feedback'>
                                                Please select a valid country.
                                            </div>
                                        </div>
                                        <div className='col-md-4 mb-3'>
                                            <label
                                                htmlFor='state'
                                                className='form-label'>
                                                State
                                            </label>
                                            <select
                                                className='form-select d-block w-100'
                                                id='state'
                                                required
                                                onChange={(e) =>
                                                    setState(e.target.value)
                                                }>
                                                <option value=''>
                                                    Choose...
                                                </option>
                                                <option>Lagos</option>
                                                <option>Abia</option>
                                                <option>Adamawa</option>
                                                <option>Akwa Ibom</option>
                                                <option>Anambra</option>
                                                <option>Bauchi</option>
                                                <option>Bayelsa</option>
                                                <option>Benue</option>
                                                <option>Borno</option>
                                                <option>Cross River</option>
                                                <option>Delta</option>
                                                <option>Ebonyi</option>
                                                <option>Edo</option>
                                                <option>Ekiti</option>
                                                <option>Enugu</option>
                                                <option>Gombe</option>
                                                <option>Imo</option>
                                                <option>Jigawa</option>
                                                <option>Kaduna</option>
                                                <option>Kano</option>
                                                <option>Katsina</option>
                                                <option>Kebbi</option>
                                                <option>Kogi</option>
                                                <option>Kwara</option>
                                                <option>Nasarawa</option>
                                                <option>Niger</option>
                                                <option>Ogun</option>
                                                <option>Ondo</option>
                                                <option>Osun</option>
                                                <option>Oyo</option>
                                                <option>Plateau</option>
                                                <option>Rivers</option>
                                                <option>Sokoto</option>
                                                <option>Taraba</option>
                                                <option>Yobe</option>
                                                <option>Zamfara</option>
                                            </select>
                                            <div className='invalid-feedback'>
                                                Please provide a valid state.
                                            </div>
                                        </div>
                                        <div className='col-md-3 mb-3'>
                                            <label
                                                htmlFor='zip'
                                                className='form-label'>
                                                Zip
                                            </label>
                                            <span className='text-muted'>
                                                (Optional)
                                            </span>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='zip'
                                                placeholder=''
                                            />
                                        </div>
                                    </div>

                                    <hr className='mb-4' />
                                    <PaystackButton
                                        className='btn btn-dark px-4 rounded-pill'
                                        {...componentProps}
                                    />
                                </Form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
