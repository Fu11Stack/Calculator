import { ACTIONS } from "./App"

export default function DigitButton({ dispatch, digit}) {
 return ( 
  <button 
    onClick={() => dispatch({ type : ACTIONS.ADD.Digit, payload: {digit} })}>
  { digit }
  
  </button>
 )
}