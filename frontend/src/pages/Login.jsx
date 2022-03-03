import { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, reset } from '../features/auth/authSlice';
import Spinner from '../components/Spinner';

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    useEffect(() => {
        if (isError) {
            toast.error(message, {
                position: toast.POSITION.BOTTOM_LEFT
            })
        }
        if (isSuccess || user) {
            toast.success('Successfully Login', {
                position: toast.POSITION.BOTTOM_LEFT
            })
            navigate('/')
        }
        dispatch(reset());

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const userDate = {
            email,
            password
        }
        dispatch(login(userDate))
    }

    if (isLoading) {
        return <Spinner />
    }


    return (
        <>
            <section className="heading">
                <h1><FaSignInAlt /> Login</h1>
                <p>Please Login Your Account</p>
            </section>
            <section className="form">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input type="email" className="form-control" id="email"
                            name="email" value={email} placeholder="Enter your Email"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password"
                            name="password" value={password} placeholder="Enter your Password"
                            onChange={onChange} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-block">
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login