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
function toArray(array) {
    let result = []
    for(var i in array) 
        result.push([i,array[i]])
    return result
}
export default function initializeDeck() {
    let id=0 
    const cards = Data

    return cards.memorySet.people.reduce((acc,type) => {
        acc.push({
           id: id++,
           type: "text",
           content: type.name
        })
        acc.push({
            id: id++,
            type: "image",
            content: type.image
        })
        return acc

    },[])
   // return shuffle(toArray(cards))//ta funkcja nie dzial bo cards nie jest tablica,
    //trzeba przekonwertowac na tablice
}