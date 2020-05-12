export default function notification({notification, prompt}){
    return (
        <div className={prompt? "notification notif_active" : "notification"}>{notification}</div>
    )
}