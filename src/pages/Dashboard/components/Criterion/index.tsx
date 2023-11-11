import useFetch from "../../../../hooks/useFetch";
const Criterion = () => {
    const url = "https://oyster-app-wizuy.ondigitalocean.app/api/criterions"
    const {data: event, isLoading, error} = useFetch(url)

    if (error) return <p>{error}</p>
    if (isLoading) return  <p>Loading...</p>
    return ( 
        <div className="w-full h-full">
            {event && event.map((criteria) => (
                <div key={criteria.criterion}>
                    <h2 className="font-bold">{criteria.criterion}</h2>
                    <p className="text-md h-auto">{criteria.description}</p>
                    <p className="text-sm">{criteria.guidelines.map((guideline) => <li key={guideline}>{guideline}</li>)}</p>
                    {[1, 2, 3, 4, 5].map((rating) => (
                        <button className="bg-purple text-white px-5 py-2 m-1">{rating}</button>
                    ))}
                </div>
            ))}
        </div>
     );
}
 
export default Criterion;