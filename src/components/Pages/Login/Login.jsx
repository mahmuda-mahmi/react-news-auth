import { Button, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLoginSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                console.log("Login with google done.");
            })
    }

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="mx-auto text-center my-8 font-bold text-xl">Login Now!</h1>
            <div>
                <form onSubmit={handleLoginSubmit} className="flex max-w-md mx-auto flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" name="email" placeholder="Email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" name="password" type="password" placeholder="Password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <a href="">Forgot Password?</a>
                    </div>
                    <Button className="px-6 py-2 rounded bg-zinc-700 text-white flex items-center gap-4" type="submit">Submit</Button>
                </form>
                <p className="mx-auto text-center mt-5">New Here? Please <Link className="font-bold" to="/register">Register</Link> </p>
                <p className="mx-auto text-center mt-5">Login with <button onClick={handleGoogleSignIn} className="btn btn-sm btn-ghost">Google</button></p>
            </div>
        </div>
    );
};

export default Login;