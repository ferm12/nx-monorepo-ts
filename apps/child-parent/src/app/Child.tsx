import React from 'react';

interface Props{
    sendDataToParent: (data: string) => void;
}

function Child(props: Props){
  return (
    <div>
      <h3>Child:</h3>
      <input 
        placeholder="Child input"
        onChange={(e) => props.sendDataToParent(e.target.value)}
      />
    </div>
  )
}

export default Child;