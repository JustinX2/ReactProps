function Person({name, age, hobbies}){
    const displayName=name.length>8 ? name.slice(0,6):name;

    return(
        <div>
            <p>Learn some information about this person</p>
            <h3>Name: {displayName}</h3>
            <h3>Age: {age}</h3>
            <h3>{age>=18?"please go vote":"you must be 18"}</h3>
            <h4>hobbies:</h4>
            <ul>
                {hobbies.map(function(hobby,index){
                    <li key={index}>{hobby}</li>
                })}
            </ul>
        </div>
    );
}