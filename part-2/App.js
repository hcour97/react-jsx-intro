const App = () => {
    return (
        <div>
            <Tweet 
                name="Scooby-Doo"
                username="ScooobyDoooobyDoo"
                date={new Date().toDateString()}
                message="Got any scoooby snacks??????"
            />

            <Tweet 
                name="Tweety"
                username="TweetyBird"
                date={new Date().toDateString()}
                message="tweet tweet tweet"
            />

            <Tweet 
                name="John Smith"
                username="smith_john"
                date={new Date().toDateString()}
                message="It's raining."
            />
        </div>
    )
}