import React from 'react';
import PropTypes from 'prop-types';
import commerce from '../lib/commerce';
import { Navigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';

export default function Checkout({ cart, onCaptureCheckout }) {
    const [checkoutToken, setCheckoutToken] = useState({});
    // Customer details
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    // Shipping details
    const [shippingName, setShippingName] = useState('');
    const [shippingStreet, setShippingStreet] = useState('');
    const [shippingCity, setShippingCity] = useState('');
    const [shippingStateProvince, setShippingStateProvince] = useState('');
    const [shippingPostalZipCode, setShippingPostalZipCode] = useState('');
    const [shippingCountry, setShippingCountry] = useState('');
    // Payment details
    const [cardNum, setCardNum] = useState('');
    const [expMonth, setExpMonth] = useState('');
    const [expYear, setExpYear] = useState('');
    const [ccv, setCcv] = useState('');
    const [billingPostalZipcode, setBillingPostalZipcode] = useState('');
    // Shipping and fulfillment data
    const [shippingCountries, setShippingCountries] = useState({});
    const [shippingSubdivisions, setShippingSubdivisions] = useState({});
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    useEffect(() => {
        generateCheckoutToken();
    }, []);

    const prevShippingCountryRef = useRef();

    useEffect(() => {
        prevShippingCountryRef.current = shippingCountry;
        if (shippingCountry !== prevShippingCountryRef) {
            fetchShippingOptions(checkoutToken.id, shippingCountry);
        }
    }, [shippingCountry]);

    const sanitizedLineItems = (lineItems) => {
        return lineItems.reduce((data, lineItem) => {
            const item = data;
            let variantData = null;
            if (lineItem.selected_options.length) {
                variantData = {
                    [lineItem.selected_options[0].group_id]:
                        lineItem.selected_options[0].option_id,
                };
            }
            item[lineItem.id] = {
                quantity: lineItem.quantity,
                variants: variantData,
            };
            return item;
        }, {});
    };

    const generateCheckoutToken = () => {
        if (!cart.line_items) {
            return '';
        } else {
            if (cart.line_items.length) {
                return commerce.checkout
                    .generateToken(cart.id, { type: 'cart' })
                    .then((token) => setCheckoutToken(token))
                    .then(() => fetchShippingCountries(checkoutToken.id))
                    .catch((error) => {
                        console.log(
                            'There was an error in generating a token',
                            error
                        );
                    });
            }
        }
    };

    const fetchShippingCountries = (checkoutTokenId) => {
        commerce.services
            .localeListShippingCountries(checkoutTokenId)
            .then((countries) => {
                setShippingCountries(countries.countries);
            })
            .catch((error) => {
                console.log(
                    'There was an error fetching a list of shipping countries',
                    error
                );
            });
    };

    const fetchSubdivisions = (countryCode) => {
        commerce.services
            .localeListSubdivisions(countryCode)
            .then((subdivisions) => {
                setShippingSubdivisions(subdivisions.subdivisions);
            })
            .catch((error) => {
                console.log(
                    'There was an error fetching the subdivisions',
                    error
                );
            });
    };

    const fetchShippingOptions = (
        checkoutTokenId,
        country,
        stateProvince = null
    ) => {
        commerce.checkout
            .getShippingOptions(checkoutTokenId, {
                country: country,
                region: stateProvince,
            })
            .then((options) => {
                // Pre-select the first available method
                const shippingOption = options[0] || null;
                setShippingOption(shippingOption);
                setShippingOptions(options);
            })
            .catch((error) => {
                console.log(
                    'There was an error fetching the shipping methods',
                    error
                );
            });
    };

    const handleFormChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    const handleShippingCountryChange = (e) => {
        const currentValue = e.target.value;
        fetchSubdivisions(currentValue);
    };

    const handleSubdivisionChange = (e) => {
        const currentValue = e.target.value;
        fetchShippingOptions(checkoutToken.id, shippingCountry, currentValue);
    };

    const handleCaptureCheckout = (e) => {
        e.preventDefault();
        const orderData = {
            line_items: sanitizedLineItems(cart.line_items),
            customer: {
                firstname: firstName,
                lastname: lastName,
                email: email,
            },
            shipping: {
                name: shippingName,
                street: shippingStreet,
                town_city: shippingCity,
                county_state: shippingStateProvince,
                postal_zip_code: shippingPostalZipCode,
                country: shippingCountry,
            },
            fulfillment: {
                shipping_method: shippingOption.id,
            },
            payment: {
                gateway: 'test_gateway',
                card: {
                    number: cardNum,
                    expiry_month: expMonth,
                    expiry_year: expYear,
                    cvc: ccv,
                    postal_zip_code: shippingPostalZipCode,
                },
            },
        };
        onCaptureCheckout(checkoutToken.id, orderData);
        <Navigate replace to={'/confirmation'} />;
    };

    const renderCheckoutForm = () => {
        return (
            <form className='checkout__form'>
                <h4 className='checkout__subheading'>Customer information</h4>

                <label className='checkout__label' htmlFor='firstName'>
                    First name
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    name='firstName'
                    placeholder='Enter your first name'
                    required
                />

                <label className='checkout__label' htmlFor='lastName'>
                    Last name
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                    name='lastName'
                    placeholder='Enter your last name'
                    required
                />

                <label className='checkout__label' htmlFor='email'>
                    Email
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    name='email'
                    placeholder='Enter your email'
                    required
                />

                <h4 className='checkout__subheading'>Shipping details</h4>

                <label className='checkout__label' htmlFor='shippingName'>
                    Full name
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setShippingName(e.target.value)}
                    value={shippingName}
                    name='shippingName'
                    placeholder='Enter your shipping full name'
                    required
                />

                <label className='checkout__label' htmlFor='shippingStreet'>
                    Street address
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setShippingStreet(e.target.value)}
                    value={shippingStreet}
                    name='shippingStreet'
                    placeholder='Enter your street address'
                    required
                />

                <label className='checkout__label' htmlFor='shippingCity'>
                    City
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setShippingCity(e.target.value)}
                    value={shippingCity}
                    name='shippingCity'
                    placeholder='Enter your city'
                    required
                />

                <label
                    className='checkout__label'
                    htmlFor='shippingPostalZipCode'>
                    Postal/Zip code
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    onChange={(e) => setShippingPostalZipCode(e.target.value)}
                    value={shippingPostalZipCode}
                    name='shippingPostalZipCode'
                    placeholder='Enter your postal/zip code'
                    required
                />

                <label className='checkout__label' htmlFor='shippingCountry'>
                    Country
                </label>
                <select
                    value={shippingCountry}
                    name='shippingCountry'
                    onChange={handleShippingCountryChange}
                    className='checkout__select'>
                    <option disabled>Country</option>
                    {Object.keys(shippingCountries).map((index) => {
                        return (
                            <option value={index} key={index}>
                                {shippingCountries[index]}
                            </option>
                        );
                    })}
                    ;
                </select>

                <label
                    className='checkout__label'
                    htmlFor='shippingStateProvince'>
                    State/province
                </label>
                <select
                    value={shippingStateProvince}
                    name='shippingStateProvince'
                    onChange={handleSubdivisionChange}
                    className='checkout__select'>
                    <option className='checkout__option' disabled>
                        State/province
                    </option>
                    {Object.keys(shippingSubdivisions).map((index) => {
                        return (
                            <option value={index} key={index}>
                                {shippingSubdivisions[index]}
                            </option>
                        );
                    })}
                    ;
                </select>

                <label className='checkout__label' htmlFor='shippingOption'>
                    Shipping method
                </label>
                <select
                    value={shippingOption.id}
                    name='shippingOption'
                    onChange={(e) => setShippingOption(e.target.value)}
                    className='checkout__select'>
                    <option className='checkout__select-option' disabled>
                        Select a shipping method
                    </option>
                    {shippingOptions.map((method, index) => {
                        return (
                            <option
                                className='checkout__select-option'
                                value={method.id}
                                key={
                                    index
                                }>{`${method.description} - $${method.price.formatted_with_code}`}</option>
                        );
                    })}
                    ;
                </select>

                <h4 className='checkout__subheading'>Payment information</h4>

                <label className='checkout__label' htmlFor='cardNum'>
                    Credit card number
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    name='cardNum'
                    onChange={(e) => setCardNum(e.target.value)}
                    value={cardNum}
                    placeholder='Enter your card number'
                />

                <label className='checkout__label' htmlFor='expMonth'>
                    Expiry month
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    name='expMonth'
                    onChange={(e) => setExpMonth(e.target.value)}
                    value={expMonth}
                    placeholder='Card expiry month'
                />

                <label className='checkout__label' htmlFor='expYear'>
                    Expiry year
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    name='expYear'
                    onChange={(e) => setExpYear(e.target.value)}
                    value={expYear}
                    placeholder='Card expiry year'
                />

                <label className='checkout__label' htmlFor='ccv'>
                    CCV
                </label>
                <input
                    className='checkout__input'
                    type='text'
                    name='ccv'
                    onChange={(e) => setCcv(e.target.value)}
                    value={ccv}
                    placeholder='CCV (3 digits)'
                />

                <button
                    onClick={handleCaptureCheckout}
                    className='checkout__btn-confirm'>
                    Confirm order
                </button>
            </form>
        );
    };

    const renderCheckoutSummary = () => {
        return (
            <>
                <div className='checkout__summary'>
                    <h4>Order summary</h4>

                    {!cart.line_items ? (
                        <Spinner />
                    ) : (
                        cart.line_items.map((lineItem) => (
                            <>
                                <div
                                    key={lineItem.id}
                                    className='checkout__summary-details'>
                                    <img
                                        className='w-25 checkout__summary-img'
                                        src={lineItem.image.url}
                                        alt={lineItem.name}
                                    />
                                    <p className='checkout__summary-name'>
                                        {lineItem.quantity} x {lineItem.name}
                                    </p>
                                    <p className='checkout__summary-value'>
                                        {
                                            lineItem.line_total
                                                .formatted_with_symbol
                                        }
                                    </p>
                                </div>
                            </>
                        ))
                    )}
                    <div className='checkout__summary-total'>
                        <p className='checkout__summary-price'>
                            <span>Subtotal:</span>
                            {!cart.subtotal
                                ? '₦'
                                : cart.subtotal.formatted_with_symbol}
                        </p>
                    </div>
                </div>
            </>
        );
    };
    return (
        <div className='checkout'>
            <h2 className='checkout__heading'>Checkout</h2>
            <div className='checkout__wrapper'>
                {renderCheckoutForm()}
                {renderCheckoutSummary()}
            </div>
        </div>
    );
}

Checkout.propTypes = {
    cart: PropTypes.object,
    history: PropTypes.object,
    onCaptureCheckout: () => {},
};
