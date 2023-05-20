import React, { useState, useRef } from 'react';
import { useCart } from 'react-use-cart';
import { Form } from 'react-bootstrap';
import { PaystackButton } from 'react-paystack';
import './checkout.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';

export default function Checkout({ formatter }) {
    const { totalItems, items, cartTotal, emptyCart } = useCart();
    const formRef = useRef(null);
    const [validated, setValidated] = useState(false);
    const publicKey = 'pk_live_52618125cff02760cb4a111f58caa27a8981ecfa';
    const testKey = 'pk_test_d4e53e2d9a012de4590bb59a96bc9218a65b58d3';
    const amount = cartTotal * 100; // Remember, set in kobo!
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        state: '',
        country: '',
        comments: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }

        setValidated(true);
    };

    const handleChange = (event) => {
        setFormData((prevData) => {
            return {
                ...prevData,
                [event.target.name]: event.target.value,
            };
        });
    };

    const orders = `Orders: ${items
        .map((item, el) => {
            return `${item.alt}: Price: ₦${item.itemTotal}, Quantity: ${item.quantity}, Size: ${item.size}`;
        })
        .join('; ')}`;

    const componentProps = {
        email: formData.email,
        amount,
        metadata: {
            custom_fields: [
                {
                    display_name: 'Customer Name',
                    variable_name: 'Customer Name',
                    value: formData.firstName + ' ' + formData.lastName,
                },
                {
                    display_name: 'Phone Number',
                    variable_name: 'Phone Number',
                    value: formData.phone,
                },
                {
                    display_name: 'Shipping Address',
                    variable_name: 'Shipping Address',
                    value: formData.address,
                },
                {
                    display_name: 'State',
                    variable_name: 'State',
                    value: formData.state,
                },
                {
                    display_name: 'Country',
                    variable_name: 'Country',
                    value: formData.country,
                },
                {
                    display_name: 'Comments',
                    variable_name: 'Comments',
                    value: formData.comments,
                },
                {
                    display_name: 'Order Summary',
                    variable_name: 'Order Summary',
                    value: orders,
                },
            ],
        },
        publicKey,
        text: 'Place Order',
        onSuccess: () => {
            emptyCart();
            setValidated(false);
            formRef.current.reset();
        },
    };

    return (
        <>
            <Header />
            <main>
                <div className='checkout' id='checkout'>
                    <section className='py-5'>
                        <div className='container px-4 px-lg-5 my-5'>
                            <div className='row gx-4'>
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
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <h6 className='my-0'>
                                                                {item.alt}
                                                            </h6>
                                                            <small className='text-muted d-sm-block d-none'>
                                                                ₦
                                                                {formatter.format(
                                                                    item.price
                                                                )}
                                                            </small>
                                                            <small className='text-muted'>
                                                                <p className='fs-6 mt-sm-4'>
                                                                    Size:{' '}
                                                                    {item.size
                                                                        ? item.size
                                                                        : 'Not specified'}
                                                                </p>
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
                                </div>
                                <div className='col-lg-7 order-lg-1'>
                                    <h4 className='mb-3 text-uppercase'>
                                        Billing address
                                    </h4>
                                    <Form
                                        className='needs-validation mt-4'
                                        noValidate
                                        validated={validated}
                                        ref={formRef}
                                        onSubmit={handleSubmit}>
                                        <div className=''>
                                            <div className='mb-3'>
                                                <label
                                                    htmlFor='firstName'
                                                    className='form-label'>
                                                    First Name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='firstName'
                                                    placeholder='First Name'
                                                    name='firstName'
                                                    required
                                                    onChange={handleChange}
                                                />

                                                <Form.Control.Feedback
                                                    type='invalid'
                                                    className='invalid-feedback'>
                                                    Valid first name is
                                                    required.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>

                                        <div className=''>
                                            <div className='mb-3'>
                                                <label
                                                    htmlFor='lastName'
                                                    className='form-label'>
                                                    Last Name
                                                </label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    id='lastName'
                                                    placeholder='Last Name'
                                                    name='lastName'
                                                    required
                                                    onChange={handleChange}
                                                />

                                                <Form.Control.Feedback
                                                    type='invalid'
                                                    className='invalid-feedback'>
                                                    Valid last name is required.
                                                </Form.Control.Feedback>
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <label
                                                htmlFor='email'
                                                className='form-label'>
                                                Email{' '}
                                            </label>
                                            <input
                                                type='email'
                                                className='form-control'
                                                id='email'
                                                name='email'
                                                placeholder='you@example.com'
                                                required
                                                onChange={handleChange}
                                            />
                                            <div className='invalid-feedback'>
                                                Please enter a valid email
                                                address for shipping updates.
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <label
                                                htmlFor='phone'
                                                className='form-label'>
                                                Phone Number{' '}
                                            </label>
                                            <input
                                                type={'tel'}
                                                className='form-control'
                                                id='phone'
                                                placeholder=''
                                                required
                                                name='phone'
                                                onChange={handleChange}
                                            />
                                            <small className='text-muted'>
                                                Include your country code
                                            </small>
                                            <div className='invalid-feedback'>
                                                Please enter a valid phone
                                                number for shipping updates.
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <label
                                                htmlFor='address'
                                                className='form-label'>
                                                Shipping Address
                                            </label>
                                            <input
                                                type='text'
                                                className='form-control'
                                                id='address'
                                                placeholder='1234 Main St'
                                                name='address'
                                                required
                                                onChange={handleChange}
                                            />
                                            <div className='invalid-feedback'>
                                                Please enter your shipping
                                                address.
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-5 mb-3'>
                                                <label
                                                    htmlFor='country'
                                                    className='form-label'>
                                                    Country
                                                </label>
                                                <CountryDropdown
                                                    className='form-select d-block w-100'
                                                    value={formData.country}
                                                    id='country'
                                                    required
                                                    name='country'
                                                    onChange={(value) =>
                                                        setFormData(
                                                            (prevData) => ({
                                                                ...prevData,
                                                                country: value,
                                                            })
                                                        )
                                                    }
                                                />
                                                {/* <select
                                                    className='form-select d-block w-100'
                                                    id='country'
                                                    required
                                                    name='country'
                                                    onChange={handleChange}>
                                                    <option value=''>
                                                        Choose...
                                                    </option>
                                                    <option>Nigeria</option>
                                                </select> */}
                                                <div className='invalid-feedback'>
                                                    Please select a valid
                                                    country.
                                                </div>
                                            </div>
                                            <div className='col-md-4 mb-3'>
                                                <label
                                                    htmlFor='state'
                                                    className='form-label'>
                                                    State
                                                </label>
                                                <RegionDropdown
                                                    disableWhenEmpty={true}
                                                    country={formData.country}
                                                    value={formData.state}
                                                    className='form-select d-block w-100'
                                                    id='state'
                                                    name='state'
                                                    required
                                                    onChange={(value) =>
                                                        setFormData(
                                                            (prevData) => ({
                                                                ...prevData,
                                                                state: value,
                                                            })
                                                        )
                                                    }
                                                />
                                                {/* <select
                                                    className='form-select d-block w-100'
                                                    id='state'
                                                    name='state'
                                                    required
                                                    onChange={handleChange}>
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
                                                </select> */}
                                                <div className='invalid-feedback'>
                                                    Please provide a valid
                                                    state.
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mb-3'>
                                            <label
                                                htmlFor='comments'
                                                className='form-label'>
                                                Comments
                                            </label>
                                            <br />
                                            <Form.Control
                                                as='textarea'
                                                rows={5}
                                                style={{ width: '100%' }}
                                                id='comments'
                                                placeholder='Include any additional details that you find necessary'
                                                name='comments'
                                                onChange={
                                                    handleChange
                                                }></Form.Control>
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
            <Footer />
        </>
    );
}
