import Button from "../Button/Button"
import {BiMessageDetail } from 'react-icons/bi'
import { MdCall} from 'react-icons/md'
import './ContractForm.css'


const ContracrForm = () => {
  return (
    <section className="container">
      <div className="contact_form">
         <div className="top_btn">
         <Button 
          text = 'VIA SUPPORT CHAT'
          icon = {<BiMessageDetail fontSize="20px"  />}
          />

          <Button 
          text = 'VIA CALL '
          icon = {<MdCall fontSize="20px"  />}
          />
         </div>
      </div>
       <div className="contract_image">

       </div>
    </section>
  )
}

export default ContracrForm