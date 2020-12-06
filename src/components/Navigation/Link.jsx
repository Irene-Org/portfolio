import { Link } from "react-scroll";

function SrollLink ( { children, ...rest } )
{
    return (
        <Link href="" { ...rest }>
            {children }
        </Link>
    );
}

export default SrollLink;
