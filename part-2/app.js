function App(){
    return(
        <div>
            <Tweet>
                username="catperson99"
                name="Cat Person"
                date={new Date().toDateString()}
                message="I'm a cat person."
            </Tweet>
            <Tweet>
                username="dogperson99"
                name="Dog Person"
                date={new Date().toDateString()}
                message="I'm a dog person."
            </Tweet>
            <Tweet>
                username="birdperson99"
                name="Bird Person"
                date={new Date().toDateString()}
                message="I'm a bird person."
            </Tweet>
        </div>
    );
}
