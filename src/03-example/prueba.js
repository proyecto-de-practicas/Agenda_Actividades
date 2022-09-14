import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const rowStyle = {
  display: 'flex'
}

const squareStyle = {
  'width':'60px',
  'height':'60px',
  'backgroundColor': '#ddd',
  'margin': '4px',
  'display': 'flex',
  'justifyContent': 'center',
  'alignItems': 'center',
  'fontSize': '20px',
  'color': 'white'
}

const boardStyle = {
  'backgroundColor': '#eee',
  'width': '208px',
  'alignItems': 'center',
  'justifyContent': 'center',
  'display': 'flex',
  'flexDirection': 'column',
  'border': '3px #eee solid'
}

const containerStyle = {
  'display': 'flex',
  'alignItems': 'center',
  'flexDirection': 'column'
}

const instructionsStyle = {
  'marginTop': '5px',
  'marginBottom': '5px',
  'fontWeight': 'bold',
  'fontSize': '16px',
}

const buttonStyle = {
  'marginTop': '15px',
  'marginBottom': '16px',
  'width': '80px',
  'height': '40px',
  'backgroundColor': '#8acaca',
  'color': 'white',
  'fontSize': '16px',
}

function Square({n}) {
  return (
     <div
                className="square"
                style={squareStyle}>
                {n}
              
              </div>
  );
}
 let  contador = 0
function Board() {
  
  const [ x, setx] = useState({
    n0:"",
    n1:"",
    n2:"",
    n3:"",
    n4:"",
    n5:"",
    n6:"",
    n7:"",
    n8:"",
    n9:"",
  })
 
   const [ j, jx] = useState(1)
   const [ p, px] = useState("x")
   
   const x1 = 'x'
   const y = '0'
  
  const punto2 =  ( nu) =>{
    if(j === 1){
      setx({...x, [`n${nu}`]:x1})
      jx(2)
      px("o")
      
    }else{
       setx({...x, [`n${nu}`]:y})
      jx(1)
      px("x")
    }
   
  }


   const  reset =()=>{
     setx({
    n0:"",
    n1:"",
    n2:"",
    n3:"",
    n4:"",
    n5:"",
    n6:"",
    n7:"",
    n8:"",
    n9:"",
  })
   px("x")
   jx(1)
   }
  
  
  const {n0,n1,n2,n3,n4,n5,n6,n7,n8,n9} = x
   let gano = ""
  if ( n0 === n1 && n1 === n2 ){
      gano = n1
  }
  if ( n3 === n4 && n4 === n5 ){
      gano = n4
  }
  if ( n6 === n7 && n7 === n8 ){
      gano = n6
  }

if ( n0 === n3 && n3 === n6 ){
      gano = n6
  }

if ( n1 === n4 && n4 === n7 ){
      gano = n4
  }
if ( n2 === n5 && n5 === n8 ){
      gano = n5
  }
if ( n0 === n4 && n4 === n8 ){
      gano = n4
  }
if ( n2 === n4 && n4 === n6 ){
      gano = n4
  }




  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status" style={instructionsStyle}>Next player: <span>{p}</span></div>
      <div id="winnerArea" className="winner" style={instructionsStyle}>Winner: <span>{gano}</span></div>
      <button onClick={ ()=> reset() } style={buttonStyle}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <div  onClick={ ()=> punto2(0) } >
              <div
                className="square"
                style={squareStyle}>
                {
                
                x.n0
              
                }
              
              </div>
          </div>
          
          <div  onClick={ ()=> punto2(1) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n1
              
                }
              
              </div>
          </div>

            <div  onClick={ ()=> punto2(2) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n2
              
                }
              
              </div>
          </div>

        </div>
        <div className="board-row" style={rowStyle}>

          <div  onClick={ ()=> punto2(3) } >
              <div
                className="square"
                style={squareStyle}>
                {
                
                x.n3
              
                }
              
              </div>
          </div>
          
          <div  onClick={ ()=> punto2(4) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n4
              
                }
              
              </div>
          </div>

            <div  onClick={ ()=> punto2(5) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n5
              
                }
              
              </div>
          </div>



        </div>
        <div className="board-row" style={rowStyle}>
         
           <div  onClick={ ()=> punto2(6) } >
              <div
                className="square"
                style={squareStyle}>
                {
                
                x.n6
              
                }
              
              </div>
          </div>
          
          <div  onClick={ ()=> punto2(7) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n7
              
                }
              
              </div>
          </div>

            <div  onClick={ ()=> punto2(8) } >
              <div
                className="square"
                style={squareStyle}>
             {
                
                x.n8
              
                }
              
              </div>
          </div>



        </div>

        
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);