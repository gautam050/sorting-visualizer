// function Heap() {
//     // Setting Time complexities
//     document.getElementById("Time_Worst").innerText = "O(N log N)";
//     document.getElementById("Time_Average").innerText = "Θ(N log N)";
//     document.getElementById("Time_Best").innerText = "Ω(N log N)";

//     // Setting Space complexity
//     document.getElementById("Space_Worst").innerText = "O(1)";

//     c_delay = 0;

//     heap_sort();

//     enable_buttons();
// }

// function swap(i, j) {
//     div_update(divs[i], div_sizes[i], "red"); // Color update
//     div_update(divs[j], div_sizes[j], "red"); // Color update

//     let temp = div_sizes[i];
//     div_sizes[i] = div_sizes[j];
//     div_sizes[j] = temp;

//     div_update(divs[i], div_sizes[i], "red"); // Height update
//     div_update(divs[j], div_sizes[j], "red"); // Height update

//     div_update(divs[i], div_sizes[i], "blue"); // Color update
//     div_update(divs[j], div_sizes[j], "blue"); // Color update
// }

// function max_heapify(n, i) {
//     let largest = i;
//     let l = 2 * i + 1;
//     let r = 2 * i + 2;

//     if (l < n && div_sizes[l] > div_sizes[largest]) {
//         if (largest != i) {
//             div_update(divs[largest], div_sizes[largest], "blue"); // Color update
//         }

//         largest = l;

//         div_update(divs[largest], div_sizes[largest], "red"); // Color update
//     }

//     if (r < n && div_sizes[r] > div_sizes[largest]) {
//         if (largest != i) {
//             div_update(divs[largest], div_sizes[largest], "blue"); // Color update
//         }

//         largest = r;

//         div_update(divs[largest], div_sizes[largest], "red"); // Color update
//     }

//     if (largest != i) {
//         swap(i, largest);

//         max_heapify(n, largest);
//     }
// }

// function heap_sort() {
//     for (let i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
//         max_heapify(array_size, i);
//     }

//     for (let i = array_size - 1; i > 0; i--) {
//         swap(0, i);
//         div_update(divs[0], div_sizes[0], "red"); // Color update for the element being moved to the top of the heap
//         div_update(divs[i], div_sizes[i], "green"); // Color update for the element being moved to its correct position
//         max_heapify(i, 0);
//         div_update(divs[i], div_sizes[i], "blue"); // Color update for the element moved out of heap
//     }
//     div_update(divs[0], div_sizes[0], "green"); // Color update for the last element
//     enable_buttons(); // Move enable_buttons call outside the loop
// }
