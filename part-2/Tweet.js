function Tweet ({name, username, date, message}) {
    return (
        <div className="tweet">
            <span>{name}</span>
            <span class="username">{username}</span> 
            <span class="date">{date}</span>
            <p>{message}</p> 
        </div>
    );
}