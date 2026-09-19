import React, { useState } from 'react'
import { genHexString } from './utils' //todo
import { sampleUsers, sampleBreaches } from './data/sampleData'
import { User, Auth } from './types';

interface Props{
    onLoginSuccess: (auth: Auth) => void;
}

function buildAuth(user: User, has_breaches: boolean){
    if(has_breaches) {
        return {
            token: genHexString(16),
            user: user,
            meta: {
                suggestPasswordChange: true,
                breachesAccounts: sampleBreaches
            }
        }
    } else {
        return {
            token: genHexString(16), 
            user: user,
            meta: {
                suggestPasswordChange: false,
                breachesAccounts: []
            }
        }
    }
}

export default function LoginForm(props: Props){
    const [user, setUser] = useState({
        email: '',
        password: '',
        loginFailed: false,
    });

    const updateLogin = (val: User) =>{
        setUser({
            ...user,
            ...val
        });
    }

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        if (user.email ===sampleUsers[0].email && user.password === sampleUsers[0].password){
            setUser({
                ...user,
                loginFailed:false
            });

            props.onLoginSuccess(buildAuth(user, false));

        } else if(user.email === sampleUsers[1].email && user.password ===sampleUsers[1].password){
            setUser({
                ...user,
                loginFailed: false,
            })
            props.onLoginSuccess(buildAuth(user, true));
        } else{
            setUser({
                ...user,
                loginFailed: true
            })
        }

        return false;
    }

    return (
        <div className='min-h-screen w-300 item-center bg-gray px-4'>
            {user.loginFailed && (
                <div className=''>
                    The email or password you provided is incorrect. Please check your entry and try again
                </div>
            )}
            <div className='text-2x1 font-bold text-center text-gray-800 bg-6'>
                <h2>Sign In</h2>
            </div>
            <br />
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <div className='mb-4'>
                        <label className='block text-sm font-medium text-gray-600'>Email</label>
                        <div className='input-group'>
                            <input
                                type='text'
                                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg'
                                id='email'
                                required
                                onChange={e => updateLogin({email: e.target.value})}
                                value={user.email}
                                placeholder='you@example.com'
                            />
                        </div>
                    </div>

                    <div className='mb-6'>
                        <label className='block text-sm font-medium text-gray-600'>Password</label>
                        <div className='className'>
                            <input
                                type='password'
                                className='mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg'
                                id='password'
                                onChange={e => updateLogin({password: e.target.value })}
                                required
                             />
                        </div>
                    </div>
                    
                    <button className='w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300' type='submit'>
                        Sing In
                    </button>
                </form>
            </div>
        </div>
    )
}