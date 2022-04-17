import "./details.css"
const Details = () => {
    return (
        <>
            <h1 style={{textAlign: 'center', fontSize: "1.8rem"}}>Curriculum Vital</h1>
            <First/>  
            <Fourth/>  
            <Second/>    
        </>
    )
}
const First = () => {
    return (
        <>
           <div className='details'>
               <h2>Personal Details</h2>
                <div className="flex">
                <h3>Name</h3>
                <p>Carlos Darkweb</p>
            </div>
            <div className="flex">
                <h3>Email</h3>
                <p>Barryopeyemi@gmail.com</p>
            </div>
            <div className="flex">
                <h3>Phone</h3>
                <p>+2348115734354</p>
            </div>
            <div className="flex">
                <h3>Name</h3>
                <p>Carlos Darkweb</p>
            </div>
           </div>
        </>
    )
}
const Fourth = () => {
    return (
        <>
            <div className="details">
                <div className="flex">
                    <h3>School Name</h3>
                    <p>Obafemi Awolowo university</p>
                </div>
                <div className="flex">
                    <h3>Course</h3>
                    <p>Mathematics</p>
                </div>
                <div className="flex">
                    <h3>Entry Date</h3>
                    <p>24 March 2020</p>
                </div>
            </div>
            
        </>
    )
}
const Second = () => {
    return (
        <>
             <div className="details">
                <div className="flex">
                    <h3>Company Name</h3>
                    <p>Darkweb Cybersecurity and tech School</p>
                </div>
                <div className="flex">
                    <h3>Job Task</h3>
                    <p>Frontend Teacher $ security manager</p>
                </div>
                <div className="flex">
                    <h3>Entry Date</h3>
                    <p>24 March 2021</p>
                </div>
                <div className="flex">
                    <h3>Retirement Date</h3>
                    <p>14 December 2023</p>
                </div>
            </div>
        </>
    )
}


export default Details;