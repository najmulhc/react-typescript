type ParentProps = {
    children: React.ReactNode
}
export const Parent = (props:ParentProps) =>{
    return (
        <div>
            <h1> I am the Parent</h1>
            {props.children}
        </div>
    )
}