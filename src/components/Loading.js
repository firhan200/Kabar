import React from 'react';

class Loading extends React.Component {
   render() {
      return (
         <div align='center'>
         	Loading<br/>
            <img src='https://loading.io/spinners/coolors/lg.palette-rotating-ring-loader.gif' width='100px'/>
         </div>
      );
   }
}

export default Loading;