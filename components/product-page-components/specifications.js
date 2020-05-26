export default function specifications({specs}){
    //split specifications up at : for individual styling
    let splitSpecs = [];
    specs.forEach(spec => {
        splitSpecs.push(spec.split(":"));
    });
    console.log(splitSpecs)
    return(
        <div className="pl-5 mt-4">
            {splitSpecs.map((spec) => (
                <h5 className="py-2">
                    <b>{spec[0]}:</b>{spec[1]}
                </h5>    
            ))}
        </div>
    )
}