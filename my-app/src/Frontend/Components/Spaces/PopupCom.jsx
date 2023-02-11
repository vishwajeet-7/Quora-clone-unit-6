
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
 
export default function PopupGfg() {
    return (
        <div>
           
            <Popup trigger=
                {<span>  🕀 Create a Space</span>}
                modal nested>
                {
                    close => (
                        <div className='modal' style={{}}>
                             <div>
                                <button style={{border:'none',backgroundColor:'white'}} onClick=
                                    {() => close()}>
                                        ☓
                                </button>
                            </div>
                            <div className='content' style={{padding:'30px'}}>
                              <div ><h3>Create a Space</h3>
                              <p>Share your interests, curate content, host discussions, and more.</p>
                             <br />
                            <label >Name<span style={{color:'red'}} >*</span> </label><br />
                            <p style={{font:"small-caption"}}>This can be changed in Space settings.</p>
                            <input style={{width:'500px',height:'30px'}} type="text" placeholder='Your Space Is Here' />
<br /><br />
                            <label >Brief description</label><br />
                            <p style={{font:"small-caption"}}>Include a few keywords to show people what to expect if they join.</p>
                            <input style={{width:'500px',height:'30px'}} type="text"  />
                             <button style={{color:'white',backgroundColor:'blue',border:'none',padding:'5px',width:'80px',height:'35px',borderRadius:'15px',fontWeight:'bold',margin:'20px 500px 0 0'}}>Create</button>
                              </div>
                            </div>
                         
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};