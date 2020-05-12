import Link from 'next/link';
export default function Body ({title, body}){
    return(
        <div>
            <main className="card">
                <h2>
                        What is the {title}?
                        {/* {props.products[0].retail_price} {props.products[0].currency} {props.products[0].name}  */}
                </h2>
                <p className="body">{body}</p>
            </main>
            <Link href="/" >
                <div className="card hov">
                    <h3>Back</h3>
                </div>
            </Link>
        </div>
    )
}