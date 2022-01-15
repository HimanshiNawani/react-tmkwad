import React from 'react';
export function SampleComponent (prop) {
  let styleObj = {
    backgroundColor: prop.bgColor,
  };

  let obj ={
    name: 'himanshi',
  }
  let arr = [1, 2, 3, 4, 6, 7, 8,];
  let arr2 = [
    <p>1</p>,
    <p>2</p>,
    <p>3</p>,
    <p>4</p>,
    <p>6</p>,
    <p>7</p>,
    <p>8</p>,
  ];

  let a =10;
  let b =20;

  return (
    <>

    <div style = {styleObj}>Heading</div>
    <div> value of a is : {a}</div>
    <div> value of b is : {b}</div>
    <div>
    sum of {a} and {b} is : {a +b}
    </div>
    </>
  );
}

