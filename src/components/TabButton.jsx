
export default function TabButton({ children, isSelected, ...props }){

    // const handleClick = () => {
    //     console.log("You clicked on");
    //     }

    return (
        <li>
            <button className= { isSelected ? 'active' : undefined } {...props}>{children}</button>
        </li>
    );
}