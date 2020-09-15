document.querySelector('#button-asc').onclick = sort;
document.querySelector('#button-desc').onclick = sortDesc;

function sort (){
    const list = document.querySelector('.items-list')
    for (let i = 0; i < list.children.length; i++){
        for (let j = i; j < list.children.length; j++){
            if (+list.children[i].getAttribute('data-price') < +list.children[j].getAttribute('data-price')) {
                replacedNode = list.replaceChild(list.children[j], list.children[i]);
                insertAfter(replacedNode, list.children[i]);
            }
        }
    }
}

function sortDesc (){
    const list = document.querySelector('.items-list')
    for (let i = 0; i < list.children.length; i++){
        for (let j = i; j < list.children.length; j++){
            if (+list.children[i].getAttribute('data-price') > +list.children[j].getAttribute('data-price')) {
                replacedNode = list.replaceChild(list.children[j], list.children[i]);
                insertAfter(replacedNode, list.children[i]);
            }
        }
    }
}


function insertAfter(elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

f = () => {
    return is = !is;
}

console.log()