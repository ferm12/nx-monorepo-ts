import React from 'react'
import Child from './Child'

function Parent(){

  const [dataFromChild, setDataFromChild] = React.useState<string | null>(null);

  const handleDataFromChild = (data: string) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h3>Parent:</h3>
      <p>
        Data from child: {dataFromChild }
      </p>
      <Child sendDataToParent={handleDataFromChild} />
    </div>
  )
}

export default Parent;



