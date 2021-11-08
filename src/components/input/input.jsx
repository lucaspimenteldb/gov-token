import './input.scss';
import EyeClose from '../../assets/eye-close.svg'
import EyeOpen from '../../assets/eye-open.svg'
import { useState } from 'react';

export default function Input(props) {
  const [closed, setClosed] = useState(true);
  function viewPassword() {
    if (closed) {
      return 'password';
    }

    return 'text';
  }

  return (
    <div className={'input'}>
      <label>{props.label}</label>
      <input 
        type={props.iconPassword ? viewPassword() : props.type} 
        placeholder={props.placeholder} 
      />

      {
        props.iconPassword ?
          <button 
            className="input-icon" 
            onClick={(e) => {e.preventDefault(); setClosed(!closed)}}
          >
            <img src={closed ? EyeClose : EyeOpen} alt="" />
          </button> :
          false
      }
      
    </div>
  )
}