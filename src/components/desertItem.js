const topDesserts = [
    {
        id:1,
        tittle:'Chicken tikka masala',
        description:'pehle khaa ke dekh bhosrike',
        image:'https://picsum.photos/200/300/?random',
        price:'$5.20'
    },
    {
        id:2,
        tittle:'Lemon Ice Cream',
        description:'Mind blowing taste',
        image:'https://picsum.photos/200/300/?random',
        price:'$3.20'
    },
    {
        id:3,
        tittle:'chocolate mousse',
        description:'unexplored flavour',
        image:'https://picsum.photos/200/300/?random',
        price:'$6.20'
    }

]

function DesertItem(){
    const listItems = topDesserts.map(dessert => {
        const itemText = `${dessert.tittle} - ${dessert.price}`
        return <li>{itemText}</li>
    })

    return (
        <div>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default DesertItem;