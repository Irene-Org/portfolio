import { useEffect } from "react";
import { Link, Events } from "react-scroll";

function SrollLink ( { children, toggle, ...rest } )
{
    useEffect( () => 
    {
        const close = () =>
        {
            if ( window.innerWidth < 768 && toggle )
            {
                toggle();
            }
        };
        Events.scrollEvent.register( 'end', close );

        return () => Events.scrollEvent.remove( 'end' );

    }, [ toggle ] );

    return (
        <Link href="" { ...rest }>
            {children }
        </Link>
    );
}

export default SrollLink;
