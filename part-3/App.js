const App = () => {
    return (
        <div>
            <person 
                name="Cora"
                hobbies={["walking, eating, sleeping"]}
                age={4}
            />

            <person 
                name="Judy"
                hobbies={["reading, cooking, biking"]}
                age={55}
            />
            <person 
                name="Steve"
                hobbies={["sewing, baking, hiking"]}
                age={15}
            />
        </div>
    )
}