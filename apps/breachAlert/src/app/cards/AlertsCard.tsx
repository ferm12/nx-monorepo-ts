import { useState } from "react";
import {  Auth, Account } from "../types";

interface Props {
    auth: Auth
}
export default function AlertsCard(props:Props) {
    const [showAlert, setShowAlert] = useState(true);

    console.log("AlertsCard", props);
    return (
        props.auth?.meta?.suggestPasswordChange  && showAlert
        ? <div className="border-2 border-black w-5xl bg-amber-400">
            <h2 className="bg-yellow bg-amber-500">Alerts</h2>

            {props.auth?.meta?.suggestPasswordChange && (
                <p> Your email was involved in a breach on the following sites:</p>
            )}
            <br/>
            {props.auth?.meta && props.auth?.meta?.breachesAccounts?.length > 0 && (
                <div>
                    <ol className='px-5'>
                        {props.auth?.meta?.breachesAccounts.map((account: Account) => (
                            <li className='list-disc' key={account.id}>
                                {account.breachDate} - {account.domain} - {account.name}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
            <p className="px-1 py-5">
                Although your informaton on our site is safe, we recommend changing your password on the sites listed above.
                AppCo account shares a password with any of the sites above.
            </p>
            <button className="bg-white hover:bg-amber-600 outline-2 border-black font-bold py-2 px-4 rounded">
                Change Password
            </button>
            <button onClick={()=>setShowAlert(false)} className="bg-white hover:bg-amber-600 font-bold outline-2 py-2 px-4 rounded">
                Dismiss
            </button>
        </div>
        :
        <div className="border-2 border-black w-5xl ">
            <h2 className="">No Alerts</h2>
        </div>

    );


}