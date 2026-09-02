import './Closures.css';
import {useState} from 'react';

export default function Closures() {

    // function codeGenerator(){
    //     const nameCodeMap = {}
    //     return function(name){
    //         if(nameCodeMap[name]){
    //             return nameCodeMap[name]
    //         }

    //         const code = Math.random().toString(36).substring(2, 15)
    //         nameCodeMap[name] = code
    //         return code
    //     }


    // }
    // const generateCode = codeGenerator();

    // console.log('fermin =>' ,generateCode('fermin'))
    // console.log('fermin =>' ,generateCode('fermin'))

    return (
        <>
        {/* <div className="container">
            <div className="item item1">item1</div>
            <div className="item item2">item2</div>
            <div className="item item3">item3</div>
            <div className="item item4">item4</div>
            <div className="item item5">item5</div>
            <div className="item item6">item6</div>
            <div className="item item7">item7</div>
            <div className="item item8">item8</div>
            <div className="item item9">item9</div>
        </div> */}
        <div className='outer-wrapper'>
                <div className="wrapper1">
                    <div className='header1'>header</div>
                    <div className='nav1-left'>nav-menu</div>
                    <div className='nav1-right'>nav-menu</div>
                    <div className="content1">content</div>
                    <div className="main1">Main content</div>
                    <div className='footer1'>footer</div>
                </div>
                <div className="wrapper2">
                    <div className="header2">header</div>
                    <div className='nav2'>nav-menu</div>
                    <div className="content2">content</div>
                    <div className='main2'>Main Content</div>
                    <div className='footer2'>footer</div>
                </div>
            </div>
        </>
    )
}