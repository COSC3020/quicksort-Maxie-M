//code.js 
//Maxie Machado 
//QuickSort 

function swap(array, first, second) 
{
    let tmp = array[first];
    array[first] = array[second];
    array[second] = tmp;
    return array;
}

function partition(array, low, hi) 
{
    let pivot = low;
    
    for (let i = low + 1; i <= hi; i++)
    {
        if (array[i] < array[low])
        {
            swap(array, ++pivot, i);
        }
    }
    swap(array, low, pivot);
    return pivot;
}

function quicksort(array)
{
    if (array.length <= 1)
    {
        return array;
    }

    let stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length)
    {
        let hi = stack.pop();
        let low = stack.pop();

        let pivot = partition(array, low, hi);

        if (pivot - 1 > low)
        {
            stack.push(low);
            stack.push(pivot - 1);
        }

        if (pivot + 1 < hi) 
        {
            stack.push(pivot + 1);
            stack.push(hi);
        }
    }
    return array;
}
