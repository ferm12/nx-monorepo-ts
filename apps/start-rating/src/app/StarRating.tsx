import { useState, useEffect } from 'react';

export default function StarRating(props){
    const { length } = props;

    const [hoveringStar, setHoveringStar] = useState(0);
    const [savedStar, setSavedStar] = useState(0);

    const stars = new Array(length).fill(0).map((_, idx) => idx + 1);

    return (
        <div onMouseLeave={() => setHoveringStar(0)}>
            {stars.map(value => {

                const active = hoveringStar ? value <= hoveringStar : value <= savedStar;

                return (
                    <span
                        key={value}
                        onClick={() => setSavedStar(value)}
                        onMouseEnter={() => setHoveringStar(value)}
                        style={{ 
                            fontSize: '44px', 
                            color: active ? 'red' : 'gray' 
                        }}
                    >
                        ★
                    </span>
                );
            })}
        </div>
    );



}
