function manipulateData(array) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  })
  .then(array => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const evenNumbers = array.filter(num => num % 2 === 0);
        resolve(evenNumbers);
      }, 1000);
    });
  })
  .then(evenNumbers => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const multipliedNumbers = evenNumbers.map(num => num * 2);
        resolve(multipliedNumbers);
      }, 2000);
    });
  })
  .then(result => {
    document.getElementById('output').textContent = result.join(', ');
  })
  .catch(error => {
    console.error('Error:', error);
    document.getElementById('output').textContent = 'Error occurred. Please try again.';
  });
}

// Test the function with the given array [1, 2, 3, 4]
manipulateData([1, 2, 3, 4]);

      