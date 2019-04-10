import Data from '../../resources/faculty-wbiis.json';

function shuffle(array) {
    const _array = array.slice(0)
    for(let i = 0; i<array.length-1;i++) {
        let randomIndex = Math.floor(Math.random() * (i + 1))
        let temp = _array[i]
        _array[i] = _array[randomIndex]
        _array[randomIndex] = temp
    }
    return _array
}

export default function initializeDeck() {
    let id=0 
    let pair=0
    const cards = Data

    return cards.memorySet.people.reduce((acc,type) => {
        acc.push({
           id: id++,
           content: type.name,
           pair: pair,
           type: "text"
        })
        acc.push({
            id: id++,
            content: type.image,
            pair: pair++,
            type: "image"     
        })
        return shuffle(acc)
    },[])
}