
let array = [6, 2, 3, 1, 7, 4, 8, 5,12,10,4,13,15]
array = quickSort(array,0,array.length-1)
console.log(array)
DrawArray()


function quickSort(items, left, right) {
    if (left < right)
    {
        let part = partition(items,left,right)
        quickSort(items, left, part);
        quickSort(items, part+1, right);
    }
    return items;
}

function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function partition(items, left, right) {
    let middle   = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (items[i] < middle){
            i++;
        }
        while (items[j] > middle){
            j--;
        }
        if (i >= j) {
            break;
        }
        swap(items, i++, j--);
    }
    return j;
}

function DrawArray() {
    let wrapper = $(".blocks-wrapper");
    wrapper.html('');
    array.forEach(element => {
        wrapper.append(`<div class="block" id="block-${element}">${element}</div>`);
    });
    wrapper.addClass('reDrawed');

    setTimeout(() => {
        wrapper.removeClass('reDrawed');
    },1000)
}