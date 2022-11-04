
type PlayersProps = {
    playerlist: {
        name: string, 
        jursey: number, 
        isSelected: string,
    }[],
    completed: "half done" | "Not Started" | "On review" | "Finished"
} 

export const Players = (props: PlayersProps) => {
     
    return (
        <div>
            <h2>{props.playerlist.map(player => (
                <span>{player.name}</span>
            ))}</h2>

            <h3>Player Selection is {props.completed}</h3>
        </div>
    )
}