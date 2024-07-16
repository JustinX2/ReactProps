function Tweet({username, name, date, message}){
    return(
        <div className="tweet">
            <p><strong>{name}</strong> (@{username})</p>
            <p>{message}</p>
            <p>{date}</p>
        </div>
    );
}