import React from "react";

const appendData = (data) => {
    let newData = [];
    var i;
    for (i = 0; i < data.length; i++) { 
      for(let j = 0; j < data[i].post.length; j++){
        newData.push(data[i].post[j])
      }
    }
    return (newData)
}

export default appendData;