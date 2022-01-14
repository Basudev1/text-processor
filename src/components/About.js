import React from 'react'

export default function About(props) {
    // const [myStyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
    }
    
    return (
        <div className="container" style= {{color: props.mode === 'dark'?'white':'#042743'}}>
            <h1 className="my-3">About us</h1>
            <div className="accordion" id="accordionExample" style= {myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style= {myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze Your Text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style= {myStyle}>
                            <strong>Analyze your text for free.</strong> This is a website developed using React Js, with the help of Codewith Harry Youtube Channel, You can use various function to make your text as you wish
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Convert To Uppercase and Lowercase
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style= {myStyle}>
                            <strong>Case Conversion</strong> You Can Make your text to Uppercase or to Lowercase with just a click, just write your text in the text field and after that click on Uppercase or Lowercase button that will make the job
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style= {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Remove ExtraSpace
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style= {myStyle}>
                            <strong>Remove unnecessary Spaces</strong> You can remove unnecessary spaces in your text 
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
