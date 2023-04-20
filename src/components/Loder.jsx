import React from 'react'

function Loder(props) {
    let theme = "#005b96";
    let { visible } = props;
    return (
        <>
        <center>
            <div className="lds-ellipsis" style={{display:visible}}>
                <div style={{background:theme}}></div>
                <div style={{background:theme}}></div>
                <div style={{background:theme}}></div>
            </div>                
        </center>
        </>
    )
}

export default Loder
