export const CondRenderfnUsigfn=()=>{
    var showMessage = true;
    console.log("Show message", showMessage);
    const toggleshowmessage=()=>{
        showMessage= !showMessage
        console.log("Show message",showMessage);
    }
       
        return (
            <div>
                <button onClick={toggleshowmessage}>Toggle message</button>
                { showMessage && <p>I M Conditionally Rendered</p>}
            </div>
        );
    }  
export default CondRenderfnUsigfn