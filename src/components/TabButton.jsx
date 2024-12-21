
export default function TabButton({ children, onSelect, isSelected }){

    // const handleClick = () => {
    //     console.log("You clicked on");
    //     }

    return (
        <li>
            <button className= { isSelected ? 'active' : undefined } onClick={onSelect}>{children}</button>
        </li>
    );
}