import React from "react";
import uuid from "uuid";
import namor from "namor";
import "../index.css";
import { _INITIAL_IMPROVEMENTS } from "../assets/constants";

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newImprovement = (improvement) => {
  return {
      completed: improvement.completed,
      improvement: improvement.improvement,
      cost: improvement.cost,
      estPriceAdj: improvement.estPriceAdj,
      estTimeToSell: improvement.estTimeToSell,
      notes: improvement.notes,
      itemId: improvement.id 
  
  // return {
  //     completed: true,
  //     improvement: 'thisis',
  //     notes: 'me',
  //     age: 22,
  //     visits: 5,
  //     progress: 65,
  //     status:
  //       statusChance > 0.66
  //         ? "relationship"
  //         : statusChance > 0.33 ? "complicated" : "single"
  //     };
  // return {
  //   firstName: namor.generate({ words: 1, numbers: 0 }),
  //   lastName: namor.generate({ words: 1, numbers: 0 }),
  //   age: Math.floor(Math.random() * 30),
  //   visits: Math.floor(Math.random() * 100),
  //   progress: Math.floor(Math.random() * 100),
  //   status:
  //     statusChance > 0.66
  //       ? "relationship"
  //       : statusChance > 0.33 ? "complicated" : "single"
  // };
  };
};

export function makeData(room) {
  console.log('room', room);
  return _INITIAL_IMPROVEMENTS[room].map(improvement => {
    return {
      ...newImprovement(improvement),
      children: range(10).map(newImprovement)
    };
  });
}
// export function makeData(len = 10) {
//   return range(len).map(d => {
//     return {
//       ...newPerson(),
//       children: range(10).map(newPerson)
//     };
//   });
// }

export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
    <a href="https://github.com/react-tools/react-table" target="_blank">
      <img
        src="https://github.com/react-tools/media/raw/master/logo-react-table.png"
        style={{ width: `150px`, margin: ".5em auto .3em" }}
      />
    </a>
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;
