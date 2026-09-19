import React, { use, useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

import { Auth } from './types';

export default function BreachAlert(){
    const [auth, setAuth] = useState<Auth>({
       token: '', 
       user: {},
       meta: {
           suggestPasswordChange: false,
           breachesAccounts: []
       }
    })
    useEffect(() => {
        console.log('auth =>', auth);

    },[auth]);

    const onLoginSuccess = (auth: Auth) => {
        setAuth(auth);
    };
    
    const onLogOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setAuth({
            token:'',
            user:{},
            meta: {
                suggestPasswordChange: false,
                breachesAccounts: []
            }
        })
    };

    return (
        <div>
            <nav className='navbar navbar-expand navbar-dark bg-amber-200'>
                <a className='navbar-brand mr-auto' href="#">
                    AppCo
                </a>
                
                {auth.token && (
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <a className='nav-link' href='#'>
                                Home <span className='sr-only'>(current)</span>
                            </a>
                        </li>

                        <li className='nav-item'>
                            <a className='nav-link' href='#'>
                                Tasks
                            </a>
                        </li>
                        <li>
                            <a onClick={onLogOut}>
                                Log out
                            </a>
                        </li>
                    </ul>
                )}
            </nav>

            { auth.token 
                ? <Dashboard auth={auth} />
                : <LoginForm onLoginSuccess={onLoginSuccess} />
            }
        </div>
    );
}