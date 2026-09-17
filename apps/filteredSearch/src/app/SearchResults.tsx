// import { useState, useEffect } from 'react';
interface SearchResultsProps {
    filteredData: string[];
}

export default function SearchResults({ filteredData }: SearchResultsProps) {

    return (
        <div>
            {filteredData.map((item, index) => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
}