let courses = [
    { name: "Courses in England", prices: [0, 100] },
    { name: "Courses in Germany", prices: [500, null] },
    { name: "Courses in Italy", prices: [100, 200] },
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


console.log('Первому пользователю подходят такие курсы, как:');

courses.forEach(course => {
    if (course.prices[0] >= requiredRange1[0] && course.prices[1] <= requiredRange1[1]) {
        console.log(course.name)
    }
});

console.log('\n' + 'Второму пользователю подходят такие курсы, как:');

courses.forEach(course => {
    if (course.prices[0] >= requiredRange2[0] && course.prices[1] <= requiredRange2[1]) {
        console.log(course.name)
    }
});

console.log('\n' + 'Третьему пользователю подходят такие курсы, как:');

courses.forEach(course => {
    if (course.prices[0] >= requiredRange3[0] && course.prices[1] <= requiredRange3[1]) {
        console.log(course.name)
    }
});