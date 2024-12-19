const Parent=()=>{
    const [val,setVal]=useState<boolean>(false);
    const sentdata=()=>{
        setVal(true)

    }
    return(
        <div>
             <button onClick={sentdata} className="btn btn-success">Sent</button>
             {
                (val)?(<Child nm="Abc" age="25"/>):(null)
             }
        </div>
       
    )
}
export default Parent;
