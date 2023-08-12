import React from 'react'

export default function About(props) {
   let myStyle={
      color:props.mode==='dark'?'white':'black',
      backgroundColor:props.mode==='dark'?'#30302f':'#faf8f2',
      border:'1px solid',
      borderColor:props.mode==='dark'?'white':'black'
   };
    return (
        <div className='container'>
            <h2 className='mt-5 mb-5 text-center'>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button"  style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Analyser</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>Welcome to TxtFlipper: Where Text Transforms and Possibilities Flourish! </strong>
                            Unleash the Power of Free Text Tools that Elevate Your Everyday. Witness Code Formatting Perfection, Case Metamorphosis, and Space Taming. But Wait, There's More: Immerse Yourself in the Elegance of a Stylish Black Background. TxtFlipper: Your Companion in Textual Exploration. Join the Evolution, Share Your Insights, and Let's Shape the Ultimate Text Toolkit Together!
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"  >
                           <strong> Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>TxtFlipper is a completely free app to use.</strong> It can easily manipulate your text in seconds.Download it for free on windows,mac or Mobile.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"  >
                            <strong>Browser compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle} >
                            <strong>This app is very much browser compatible and it does not load you page every time.</strong> Browser compatibility means that your website can be 'translated' effectively via a particular browser or operating system, such that it can be accessed by and is fully functional for a user. A site may behave perfectly in one browser but still have issues and errors in others.
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

