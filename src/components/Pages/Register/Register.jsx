import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../../Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegisterSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, photo, name);
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        < div >
            <Navbar></Navbar>
            <h1 className="mx-auto text-center my-8 font-bold text-xl">Register Your Account Here!</h1>
            <form onSubmit={handleRegisterSubmit} className="flex max-w-md mx-auto flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="Name" value="Your name" />
                    </div>
                    <TextInput id="name" type="text" name="name" placeholder="Name" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" name="email" placeholder="Email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photoUrl" value="Photo URL" />
                    </div>
                    <TextInput id="photoUrl" type="text" name="photoUrl" placeholder="Photo URL" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" name="password" type="password" required shadow />
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree" className="flex">
                        I agree with the&nbsp;
                        <Link href="#" className="text-cyan-600 hover:underline dark:text-cyan-500">
                            terms and conditions
                        </Link>
                    </Label>
                </div>
                <Button type="submit">Register new account</Button>
            </form>

            <p className="mx-auto text-center mt-5">Already have an account? Please <Link className="font-bold" to="/login">Login</Link> </p>

        </div >
    );
};

export default Register;