//code.js 
//Maxie Machado 
//QuickSort 

function swap(array, indexA, indexB) 
{
    let tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
}

function partition(array, leftBound, rightBound) 
{
    if (array.lngth < 2) 
    {
        return array;
    }

    let boundaries = [[0, array.length - 1]] 

    while (boundaries.length > 0)
    {
        let [low, high] = boundaries.pop();

        if (low < high) 
        {
            let pivotIndex = partition(array, low, high);

            boundaries.push([low, pivotIndex -1]);
            boundaries.push([pivotIndex + 1, high]);
        }
    }
    return array;
}
