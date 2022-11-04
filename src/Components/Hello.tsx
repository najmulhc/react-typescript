// types for the component's props 
type propsForHello ={
    name:string
}

export const Hello = (props: propsForHello) => {
    return (
        <div>
            <h3>Hello, {props.name}!</h3>
        </div>
    )
}