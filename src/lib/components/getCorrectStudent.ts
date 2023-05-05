import { Student } from '$lib/components/question/questions';

export function getCorrectStudent(answerTracking: { [K in Student]: number }): string {
    let currentScore = 0;
    let correctStudents: Student[] = [];

    for (const student of [Student.Abel, Student.Ian, Student.Josh, Student.Luca, Student.Kate, Student.Malia, Student.Mallika, Student.Sandeep]) {
        if (currentScore < answerTracking[student]) {
            correctStudents = [student];
            currentScore = answerTracking[student];
        } else if (currentScore == answerTracking[student]) {
            correctStudents.push(student);
        }
    }

    let correctStudent = correctStudents[Math.floor(Math.random() * correctStudents.length)];

    if (Math.random() < 0.09) {
        correctStudent = Student.John;
    }

    return Student[correctStudent].toString()
}

