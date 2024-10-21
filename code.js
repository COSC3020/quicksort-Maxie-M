//code.js 
//Maxie Machado 
//QuickSort 

function swap(array, index1, index2) 
{
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
}

function partition(array, leftBound, rightBound) 
{
    const mid = Math.floor((start + end) /2);
    const pivotValue = array[mid];

    swap(array, mid, end);
    let pivotIndex = start;

    for (let j = start; j < end; j++)
    {
        if (array[j] < pivotValue)
        {
            swap(array, j, pivotIndex);
            pivotIndex++;
        }
    }
    swap(array, pivotIndex, end);
    return pivotIndex;
}

function quickSort(array)
{
    if (array.length < 2) 
    {
        return array;
    }

    const ind = [[0, array.length -1]];

    while (ind.length > 0)
    {
        const [low, high] = ind.pop();

        if (low < high) 
        {
            const pivotIndex = partition(array, low, high);

            ind.push([low, pivotIndex -1]);
            ind.push([pivotIndex + 1, high]);
        }
    }
    return array;
}

