interface abc{
    nm:string,
    age:string
}
const Child:React.FC<abc>=({nm,age})=>{
    return(
        <div>
            <h2>{nm}</h2>
            <h2>{age}</h2>

        </div>
    )
}
export default Child;
