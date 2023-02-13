import React from 'react'
import "./Payment.css"
import { Radio, RadioGroup ,Stack} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

 import img from "../Images/-4-ans_frontend_assets.webp"
 import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
const PaymentPage = () => {
  return (
    <div className='container'>

    <div className='popup'>
    <img src={img} style={{width:"80px" , height:"50px" ,marginTop:"10px"}} className="Quore_heading" />
     

     <div className='Profile_pic'
      style={{justifyContent:"center", margin:"auto"}}>
       <img src="https://qph.cf2.quoracdn.net/main-thumb-860644095-200-rkyticcrkietpvouqkowdtwsmnakyoop.jpeg" style={{width:"100px", height:"80px" ,borderRadius:"50%",margin:"auto" ,marginTop:"10px" }} />
     </div>
     <div  className='Join_quora'>
    <h2>Join Quora +</h2>
     </div>
   <div className='three_box' style={{display:"flex", margin:"auto",justifyContent:"center"}}>
    <div className='box_1' style={{width:"200px" ,height:"100px" ,border:"1px solid black", margin:"10px"}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1012 15.4431L10.3583 15.2301L9.60098 15.4331L10.3253 18.1362C10.4126 18.462 10.2193 18.7968 9.89359 18.8841L8.91064 19.1474C8.58491 19.2347 8.25006 19.0414 8.1628 18.7157L7.43848 16.0125L6.9293 16.1489C6.44075 16.2799 5.93848 15.9899 5.80754 15.5013L4.88565 12.0609C4.7547 11.5722 5.04472 11.0701 5.53327 10.9391L8.98677 10.0138L9.68834 9.53176L5.34923 2.01611C3.00558 3.57592 1.19771 5.9619 0.411761 8.89509C-1.30309 15.2951 2.49487 21.8734 8.8949 23.5884C11.8281 24.3743 14.7982 24.0016 17.321 22.7519L13.1012 15.4431Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M9.18945 10.8063L10.1645 14.4455L12.6352 14.6372L10.0729 10.1992L9.18945 10.8063Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M17.2213 14.993L15.025 6.79639L11.3428 9.32666L14.492 14.7811L17.2213 14.993Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M15.1047 0.412078C12.1716 -0.373874 9.2014 -0.00120151 6.67871 1.24853L10.9575 8.65973L14.814 6.00965L14.7399 5.73317C14.6309 5.32603 14.8725 4.90747 15.2796 4.79841C15.6868 4.68936 16.1053 4.93099 16.2144 5.33813L17.3147 9.44491C17.8965 9.29246 18.4928 9.63816 18.6487 10.2198C18.8045 10.8015 18.4609 11.399 17.8809 11.5579L18.9799 15.6595C19.0889 16.0666 18.8473 16.4852 18.4402 16.5942C18.033 16.7033 17.6145 16.4616 17.5054 16.0545L17.4317 15.7795L14.9571 15.5874L18.6506 21.9843C20.9942 20.4244 22.802 18.0385 23.588 15.1054C25.3028 8.70533 21.5048 2.12702 15.1047 0.412078Z" class="icon_svg-fill_as_stroke" fill="#666666"></path></svg>
    <p>Browse Quora ad‑free</p>>
    </div>
    <div className='box_2' style={{width:"200px" ,height:"100px",border:"1px solid black",margin:"10px"}}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.36523 6.77881L6.36994 6.78217V17.404C6.39605 17.4925 6.51951 17.8425 6.92779 18.0366C7.50475 18.3109 8.07202 18.288 8.0845 18.2878L8.08392 7.09292C8.08392 7.09292 7.11624 7.09129 6.36523 6.77881Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M14.4324 11.9689C14.4324 11.2904 13.8824 10.7406 13.204 10.7407C12.5256 10.7408 11.9756 11.291 11.9756 11.9694C11.9756 12.4336 12.2331 12.8376 12.613 13.0464L12.1734 15.2C12.1585 15.2732 12.2144 15.3416 12.289 15.3415L14.1188 15.341C14.1935 15.341 14.2493 15.2726 14.2344 15.1995L13.7948 13.046C14.1748 12.8372 14.4324 12.433 14.4324 11.9689Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M16.4575 7.09181V5.40625L8.0918 7.09181H16.4575Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M12 -0.0170898C5.37254 -0.0170898 0 5.35545 0 11.9829C0 18.6104 5.37254 23.9829 12 23.9829C18.6275 23.9829 24 18.6104 24 11.9829C24 5.35545 18.6275 -0.0170898 12 -0.0170898ZM18.3237 7.09286V18.9907H16.6694H8.21923L8.21914 18.9908H8.08253C8.05085 18.9908 7.27613 19.0037 6.48058 18.5929C5.69818 18.1889 5.67619 17.5052 5.67619 17.5052V6.27926L14.6698 4.59091C14.6698 4.59091 14.8125 4.9176 15.4404 5.0808C16.4397 5.34048 17.1545 5.26541 17.1545 5.26541V7.09142H18.3235V7.09286H18.3237Z" class="icon_svg-fill_as_stroke" fill="#666666"></path></svg>
     <p>
     Unlock millions of answers
     </p>
 
     </div>
     <div className='box_3' style={{width:"200px" ,height:"100px",border:"1px solid black",margin:"10px"}} >
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.15967 10.6679C6.15967 11.1142 6.55576 11.4773 7.04258 11.4773H7.48447V9.85861H7.04258C6.55567 9.85852 6.15967 10.2217 6.15967 10.6679Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path d="M9.24743 12.7983H8.80554V14.4171H9.24743C9.73425 14.4171 10.1302 14.054 10.1302 13.6077C10.1302 13.1614 9.73425 12.7983 9.24743 12.7983Z" class="icon_svg-fill_as_stroke" fill="#666666"></path><path class="icon_svg-fill_as_stroke" d="M12 0C5.38339 0 0 5.38339 0 12C0 18.6166 5.38339 24 12 24C18.6166 24 24 18.6166 24 12C24 5.38339 18.6166 0 12 0ZM9.24739 15.7382H8.8055V16.8416C8.8055 17.2065 8.50973 17.5021 8.14493 17.5021C7.78013 17.5021 7.48435 17.2065 7.48435 16.8416V15.7382H5.49907C5.13427 15.7382 4.8385 15.4425 4.8385 15.0777C4.8385 14.7128 5.13418 14.4171 5.49907 14.4171H7.48445V12.7983H7.04256C5.8272 12.7983 4.8385 11.8426 4.8385 10.6678C4.8385 9.49315 5.8272 8.53738 7.04256 8.53738H7.48445V7.43405C7.48445 7.06915 7.78013 6.77347 8.14502 6.77347C8.50982 6.77347 8.8056 7.06915 8.8056 7.43405V8.53738H10.35C10.7148 8.53738 11.0105 8.83315 11.0105 9.19795C11.0105 9.56285 10.7148 9.85853 10.35 9.85853H8.8055V11.4772H9.24739C10.4627 11.4772 11.4514 12.433 11.4514 13.6077C11.4514 14.7825 10.4627 15.7382 9.24739 15.7382ZM19.2385 13.7711C19.2385 15.4484 17.874 16.8131 16.1966 16.8131C14.5193 16.8131 13.1548 15.4484 13.1548 13.7711V10.5046C13.1548 8.8273 14.5193 7.46275 16.1966 7.46275C17.874 7.46275 19.2385 8.8273 19.2385 10.5046V13.7711Z" fill="#666666"></path><path d="M16.1967 8.78391C15.2479 8.78391 14.476 9.55574 14.476 10.5046V13.7711C14.476 14.72 15.2479 15.4919 16.1967 15.4919C17.1455 15.4919 17.9174 14.72 17.9174 13.7711V10.5046C17.9174 9.55574 17.1455 8.78391 16.1967 8.78391Z" class="icon_svg-fill_as_stroke" fill="#666666"></path></svg>
      <p>
      <p>Try it free for 30 days</p>
      </p>
      
     </div>
   </div>
     <div className='button_section'>
     
     </div>
     <div className='descvription_section'>
     <TableContainer>
   <Table variant='simple'>
    
     <Thead>
       <Tr textAlign='left'>
         <Th>30-day free trial</Th>
          <Td>$0.00</Td>
        
       </Tr>
     </Thead>
     <Tbody>
       <Tr  textAlign='left'>
         <Td>Starting March 16, 2023</Td>
         
         <Td>$47.88/yr</Td>
       </Tr>
     
       <Tr>
         <Td>Your subscription will renew automatically each year. Cancel at any time in settings.</Td>
         
       </Tr>
     </Tbody>
     <Tfoot>
       <Tr>
         <Td>By signing up for a subscription, you agree to Quora's Subscriber Terms of Service.</Td>
         
       </Tr>
     </Tfoot>
   </Table>
 </TableContainer>
     </div>

   
     <div className='input_section'>
    <input className='input_btn' placeholder='Enter Your Card Number'></input>
 
     </div>
     <div className='Last_para'>
     <p className='parag_raph'>Existing subscriptions will also be charged to this card. You may receive a temporary authorization charge to validate your card. Learn more.
 </p>
     </div>
     <div className='last_button'>
      <button className='blue_btn'>Try 30 days free</button>
     </div>
    </div>

    
    </div>
  )
}

export default PaymentPage