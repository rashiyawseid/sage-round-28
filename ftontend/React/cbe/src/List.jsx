export default function List(){
    const cars=["byd","bmw","toyota","volvo"]

    return<>
    <ul>
        {cars.map (function(car,index){
            return <li key={index}>{car}</li>
        })}
    </ul>
    </>
}