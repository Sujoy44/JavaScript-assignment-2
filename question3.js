const students = [
    { name: "Mithun", marks: 95 },
    { name: "Prabir", marks: 75 },
    { name: "Alka", marks: 92 },
    { name: "Shivam", marks: 70 },
    { name: "Farman", marks: 99 },
];

function congratulateTopStudents(students) {
    students.forEach(student => {
        if (student.marks > 90) {
            console.log(`Congratulations ${student.name}! You have cleared the exam.`);
        }
    });
}

// Example usage:
congratulateTopStudents(students);
// OUTPUT:
// Congratulations Mithun! You have cleared the exam.
// Congratulations Alka! You have cleared the exam.
// Congratulations Farman! You have cleared the exam.
