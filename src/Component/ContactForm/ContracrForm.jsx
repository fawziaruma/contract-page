import Button from "../Button/Button"
import { BiMessageDetail } from 'react-icons/bi'
import { AiFillMessage } from 'react-icons/ai'
import { MdCall } from 'react-icons/md'
import './ContractForm.css'
import { useState } from "react"


const ContracrForm = () => {
  const [name , setName] = useState("shohan");
  const[email ,  setEmil] = useState("support@gmail.com")
  const[text , setText] = useState("Hello user give provied your text")

  const onSubmit = (event) =>{
    event.preventDefault()
    setName(event.target[0].value)
    setEmil(event.target[1].value)
    setText(event.target[2].value)
  }
  return (
    <section className="container">
      <div className="contact_form">
        <div className="top_btn">
          <Button
            text='VIA SUPPORT CHAT'
            icon={<BiMessageDetail fontSize="20px" />}
            style={{ fontSize: '16px' }}
          />

          <Button
            text='VIA CALL '
            icon={<MdCall fontSize="20px" />}
            style={{ fontSize: '16px' }}
          />

        </div>

        <button className="isOutline" style={{ marginTop: '10px' }}>
          <AiFillMessage fontSize="24px" />
          <span className="btn-text">VIA EMAIL FORM</span>
        </button>

        <form onSubmit={onSubmit} >
          <div className="form_control">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
          </div>
          <div className="form_control">
          <label htmlFor="name">Email</label>
          <input type="email" name="email" />
          </div>
          <div className="form_control">
          <label htmlFor="text">Text</label>
          <textarea name="text" rows="8"></textarea>
          </div>
          <div
            style={{
              display:"flex" ,
              justifyContent:"end",
              marginTop:"8px",
              fontSize:"16px"
        
        }}
          >
          <Button text="SUBMIT BUTTON" ></Button>
          </div>
          <div>{name + '' + email + '' + text}</div>
        </form>
      </div>
      <div className="contract_image">
        <img src="/public/images/Service 24_7-pana 1.png" alt="" />
      </div>
    </section>
  )
}

export default ContracrForm