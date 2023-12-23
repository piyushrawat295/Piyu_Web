import React from 'react';

export default function Alert(props) {
 
  const capitalize = (word) => {
    if (word) {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    } else {
      return ""; // or handle the case where word is undefined
    }
  };
  
  return (
    <>
    <div className={`alert alert-${props.alert.type}`} role="alert">
    <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
    </div>
    </>
    
  );
}
