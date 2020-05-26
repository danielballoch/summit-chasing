export default function Options ({sizes, colors, activeSize, activeColor, setSize, setColor}){
    return(
        <div className="d-flex flex-wrap">
            <div className="d-flex pl-5 align-items-center">
                    <h2>Size:</h2>
                    {sizes.map(size => (
                        <div 
                        className={activeSize === size? 'cardsmall hov active' : 'cardsmall hov'}
                        onClick={() => setSize(size)}
                        >
                            {size}
                        </div>
                    ))}
            </div>
            <div className="d-flex pl-5 align-items-center">
            <h2>Color:</h2>
                    {colors.map(color => (
                        <div 
                        className={activeColor === color? 'cardsmall hov active' : 'cardsmall hov'}
                        onClick={() => setColor(color)}
                        >
                            {color}
                        </div>
                    ))}
            </div>
            
            
        </div>
    )
}