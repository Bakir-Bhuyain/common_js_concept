// ১. এটা আমাদের মেইন ফাংশন (Higher Order Function)
// সে দুইটা সংখ্যা নেয় এবং একটা 'task' (ফাংশন) নেয়
function calculation(num1, num2, task) {
  // এখানে 'task' হলো একটা কলব্যাক ফাংশন
  const result = task(num1, num2);
  console.log("Result is:", result);
}

// ২. আলাদা আলাদা ছোট ফাংশন (Callback Functions)
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// ৩. ব্যবহার (Passing Different Functions)

// যোগ করতে চাইলে 'add' কে পাঠাচ্ছি
calculation(10, 5, add); // Output: Result is: 15

// বিয়োগ করতে চাইলে 'subtract' কে পাঠাচ্ছি
calculation(10, 5, subtract); // Output: Result is: 5

// গুণ করতে চাইলে 'multiply' কে পাঠাচ্ছি
calculation(10, 5, multiply); // Output: Result is: 50
