function App(){
    return (
        <div>
            <Person
                name="Sally"
                age={33}
                hobbies={["running", "swimming", "biking"]}
            />
            <Person
                name="Joe"
                age={22}
                hobbies={["drawing", "painting", "reading"]}
            />
            <Person
                name="Billy"
                age={16}
                hobbies={["playing video games", "watching TV"]}
            />
        </div>
    );
}
