import Link from 'next/link';
export default function Body ({title, body}){
    return(
        <div>

                <p className="body pl-5 pt-3">{body}</p>
                <p className="body ml-5  pr-5 indent-paragraph">{body}</p>

            {/* <Link href="/" >
                <div className="card hov w-50 m-auto">
                    <h3>Back</h3>
                </div>
            </Link> */}
        </div>
    )
}