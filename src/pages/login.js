import { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import FirebaseContext from '../context/firebase';
import * as ROUTES from '../constants/routes';

const Login = () => {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || emailAddress === '';

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            await firebase.auth().signInWithEmailAndPassword(emailAddress, password);
            history.push(ROUTES.DASHBOARD);
        } catch (error) {
            setEmailAddress('');
            setPassword('');
            setError(error.message);
        }
    };

    useEffect(() => {
        document.title = 'Login - Tafoo';
    }, []);

    return (
        <div className="container flex mx-auto max-w-screen-md items-center justify-center h-screen px-4 lg:px-0">
            {/* <div className="flex w-2/5">
                <img src="/images/iphone-with-profile.jpg" alt="iphone with Tafoo app" className="max-w-full"/>
            </div> */}

            <div className="flex flex-col lg:w-2/5 justify-center h-full max-w-md m-auto">
                <div className="flex flex-col items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 p-4 border border-gray-primary mb-4 rounded-md shadow-md">
                    <h1 className="flex justify-center w-full">
                        <img src="/images/logo.png" alt="Tafoo" className="mt-2 w-6/12 mb-4" />
                    </h1>

                    {error && <p data-testid="error" className="mb-4 text-xs text-red-primary">{error}</p>}

                    <form onSubmit={handleLogin} method="POST" data-testid="login">
                        <input
                            aria-label="Enter your email address"
                            type="text"
                            placeholder="Email address"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
                            border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setEmailAddress(target.value)}
                            value={emailAddress}
                        />
                        <input
                            aria-label="Enter your passoword"
                            type="password"
                            placeholder="Password"
                            className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 
                            border border-gray-primary rounded mb-2"
                            onChange={({ target }) => setPassword(target.value)}
                            value={password}
                        />
                        <button
                            disability={isInvalid}
                            type="submit"
                            // className={`bg-indigo-500 w-full border-2 border-white rounded h-8 font-bold text-white ${isInvalid && 'opacity-50'}`}
                            className={`bg-gray-background w-full rounded h-8 font-bold text-purple-500 ${isInvalid && 'opacity-50'}`}
                        >
                            Login
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center flex-col w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 
                    p-4 border border-gray-primary rounded-md shadow-md">
                    <p className="text-sm">
                        Don't have an account?{` `}
                        <Link to={ROUTES.SIGN_UP} className="font-bold text-purple-800" data-testid="sign-up">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

// TODO: add to tailwind config
//bg-blue-medium (hex values)
//text-red-primary (hex values)
// text-blue-primary (hex values)
// text-gray-base (hex values)
// border-gray-primary (hex value)

export default Login;
