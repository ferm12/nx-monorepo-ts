import {useState} from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);


  const  data =[
    {title:'title1', content:'content1'},
    {title:'title2', content:'content2'}
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {
        data.map((item, index)=>(
          <div>
            <button onClick={() => toggle(index)}>
              {item.title}
            </button>
            {openIndex === index && <div>{item.content}</div>}
          </div>
        ))
      }
    </div>
  );
}
