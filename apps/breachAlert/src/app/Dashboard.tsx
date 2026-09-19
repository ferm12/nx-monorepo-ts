import TasksCard from './cards/TasksCard';
import AlertsCard from './cards/AlertsCard';
import { Auth, Account, Meta } from './types';

interface Props {
    auth: Auth 

}

export default function Dashboard(props: Props){
    return (
        <div >
            <h2 className='font-bold'>Dashboard</h2>
            <div>
                <div>

                    <AlertsCard auth={props.auth}/>
                    <br />
                    <TasksCard />
                </div>
            </div>
        </div>
    )
}
