import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext);
    const [currState, setCurrState] = useState("Sign Up");
    const [isClient, setIsClient] = useState(true); // State to toggle between Client and Point Vent
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "", // Add confirm password field for Point Vent
        storeName: "",
        countryCode: "+213", // Default country code example for Algeria
        phoneNumber: "",
        registerCommerce: ""
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const onLogin = async (e) => {
        e.preventDefault();

        if (!isClient && data.password !== data.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            let endpoint = currState === "Login" ? "/api/user/login" : "/api/user/register";
            const response = await axios.post(`${url}${endpoint}`, data);

            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                loadCartData({ token: response.data.token });
                setShowLogin(false);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        }
    };

    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close" />
                </div>
                <div className="login-popup-switch">
                    <button type="button" onClick={() => setIsClient(true)} className={isClient ? "active" : ""}>Client</button>
                    <button type="button" onClick={() => setIsClient(false)} className={!isClient ? "active" : ""}>Point Vent</button>
                </div>
                <div className="login-popup-inputs">
                    {isClient ? (
                        <>
                            {currState === "Sign Up" && (
                                <input
                                    name='name'
                                    onChange={onChangeHandler}
                                    value={data.name}
                                    type="text"
                                    placeholder='Your name'
                                    required
                                />
                            )}
                            <input
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                type="email"
                                placeholder='Your email'
                                required
                            />
                            <input
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                required
                            />
                        </>
                    ) : (
                        <>
                            <input
                                name='storeName'
                                onChange={onChangeHandler}
                                value={data.storeName}
                                type="text"
                                placeholder='Store Name'
                                required
                            />
                            <div className="phone-input-group">
                                <input
                                    name='countryCode'
                                    onChange={onChangeHandler}
                                    value={data.countryCode}
                                    type="text"
                                    placeholder='Country Code'
                                    required
                                    className="country-code"
                                />
                                <input
                                    name='phoneNumber'
                                    onChange={onChangeHandler}
                                    value={data.phoneNumber}
                                    type="text"
                                    placeholder='Phone Number'
                                    required
                                    className="phone-number"
                                />
                            </div>
                            <input
                                name='email'
                                onChange={onChangeHandler}
                                value={data.email}
                                type="email"
                                placeholder='Store Email'
                                required
                            />
                            <input
                                name='password'
                                onChange={onChangeHandler}
                                value={data.password}
                                type={showPassword ? "text" : "password"}
                                placeholder='Password'
                                required
                            />
                            <input
                                name='confirmPassword'
                                onChange={onChangeHandler}
                                value={data.confirmPassword}
                                type={showPassword ? "text" : "password"}
                                placeholder='Confirm Password'
                                required
                            />
                            <input
                                name='registerCommerce'
                                onChange={onChangeHandler}
                                value={data.registerCommerce}
                                type="text"
                                placeholder='Register Commerce'
                                required
                            />
                        </>
                    )}
                </div>
                <div className="show-password">
                    <input
                        type="checkbox"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    <label>Show Password</label>
                </div>
                <button type="submit">{currState === "Login" ? "Login" : "Create account"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? (
                    <p>
                        Create a new account? <span onClick={() => setCurrState('Sign Up')}>Click here</span>
                    </p>
                ) : (
                    <p>
                        Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
                    </p>
                )}
            </form>
        </div>
    );
};

export default LoginPopup;
