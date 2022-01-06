function City(props){

    const {cityData} = props
//destructoring^//
    return (

        <div>
            <p>Capitol: {cityData.capitol}</p>
            <p>Country: {cityData.country}</p>
            <p>Population:{cityData.population}</p>
            <p>Language:{cityData.language}</p>
    
        </div>


    )


}
export default City
//if no destructoring use { props.cityData.capitol}etc//