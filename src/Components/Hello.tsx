// types for the component's props 
type propsForHello ={
    name: string,
    taskToFinish: number,  
    american: boolean, 
}
 
const American = () => {
    return (
        <div>
            <h4>You are an american</h4>
        </div>
    )
}

export const Hello = (props: propsForHello) => {
    return (
        <div>
            <h3>Hello, {props.name}! <br /> you have {props.taskToFinish} tasks to finish</h3>
            {
                props.american && <American />
            }
        </div>
    )
}