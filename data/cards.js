export default () => {
    let cards = [];

    for (let i = 0; i < 16; i+=2) {
        let index = Math.floor(Math.random() * 10000);

        cards.push({
            id : i,
            rel : i+1,
            flipped : false,
            url : `http://randomimage.setgetgo.com/get.php?key=${index}&height=176&width=176`,
            discovered : false
        });
        cards.push({
            id : i+1,
            rel : i,
            flipped : false,
            url : `http://randomimage.setgetgo.com/get.php?key=${index}&height=176&width=176`,
            discovered : false
        });
    }

    return shuffle(cards);
}

function shuffle(array) {
    let currentIndex = array.length, temp, randomIndex ;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }

    return array;
}