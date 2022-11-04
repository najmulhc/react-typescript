
type PlayersProps = {
    playerlist: {
        name: string, 
        jursey: number, 
        isSelected: boolean
    }[],
} 

export const Players = (props: PlayersProps) => {
     
    return (
        <div>
            <h2>{props.playerlist.map(player => (
                <span>{player.name}</span>
            ))}</h2>
        </div>
    )
}