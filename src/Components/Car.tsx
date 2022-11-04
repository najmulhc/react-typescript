type CarProps ={ 
    car: {
        name: string, 
        cc: number, 
        country: string
    }
}
export const Car = (props: CarProps) => {
    return (
        <div>
            <h1>This is a {props.car.name} car with {props.car.cc}cc engine that was built in {props.car.country}</h1>
        </div>
    )
}