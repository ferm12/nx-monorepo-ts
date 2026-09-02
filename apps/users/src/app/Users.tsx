import { useState, useEffect } from 'react';
import axios from 'axios';


export default function Users(){
    function nextGreaterElements(arr: number[]): number[] {
        const result: number[] = new Array(arr.length).fill(-1);
        const stack: number[] = [];
      
        for (let i = 0; i < arr.length; i++) {
          // While stack is not empty and current element is greater
          while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const index = stack.pop();
            if (index !== undefined) {
              result[index] = arr[i];
            }
          }
          stack.push(i);
        }
      
        return result;
      
      
      }
      // Example usage:
      let arr = [4, 5, 2, 25];
      console.log(nextGreaterElements(arr)); 


    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.users))
    }, [])



    return (
        <>
            <h1>Users Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>pic</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user.id}>
                            <td>{user.firstName}</td>
                            <td>{user.age}</td>
                            <td><img src={user.image} alt={user.firstName} width={48} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    );
}