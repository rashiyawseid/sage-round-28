export default function Garage(props){
    return<>
{props.cars && <h1>there are {props.cars.length} cars in the garage</h1>}
    </>
}