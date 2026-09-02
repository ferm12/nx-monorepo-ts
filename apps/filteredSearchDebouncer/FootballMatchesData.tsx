import React, { useState } from "react";
import "./index.css";

export default function FootballMatchesData(){
    const [listData, setListData] = useState([]);
    const [initialRender, setInitialRender] = useState(null)

    const onClick = (year) => {
        fetch(`https://jsonmock.hackerrank.com/api/football_competitions?year=${year}`)
        .then((data) => data.json())
        .then((jsonData) => {
            setListData(jsonData);
            setInitialRender(false);
        });
    }

    var years = [2011, 2012, 2013, 2014, 2015, 2016, 2017];
    let totalMatches = listData.data && listData.data.length ? listData.data.length : 0;
    return (
      <div className="layout-row">
        <div className="section-title">Select Year</div>
        <ul className="sidebar" data-testid="year-list">
          {years.map((year, i) => {
            return (
                <li 
                    className=""
                    onClick={() => onClick(year)}
                    key={year}
                >
                    <a>{year}</a>
              </li>
            )
          })}
        </ul>

        <section className="content">
          {
            totalMatches > 0 
            ? (<section>
                    <div className="total-matches" data-testid="total-matches">Total matches: {totalMatches}</div>
                    <ul className="mr-20 matches styled" data-testid="match-list">
                    {
                        listData.data.map((detail, index) =>(
                            <li key={index} className="slide-up-fade-in">Match {detail.name} won by {detail.winner} </li>
                        ))
                    } 
                    </ul>
                </section>) 
            : initialRender 
                ? (
                    <div data-testid="no-result" className="slide-up-fade-in no-result">
                        No Matches Found
                    </div>)
                : ""
          }
        </section>
      </div>
    );
}