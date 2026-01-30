import React from "react";

const coursesData = [
  {
    id: "x",
    name: "Easy",
    price: 290,
    schedule: "1 lesson per week",
    plan: "Python --> HTML --> CSS --> JS --> React JSX (~80 lessons, total 4–6 years)",
    planGE: "Python --> HTML --> CSS --> JS --> React JSX (~80 გაკვეთილი, ჯამში 4–6 წელი)",
    future: "Afterward, you can learn other fields: design, game dev, backend, USA opportunities",
    futureGE: "შემდგომ შეგიძლიათ ისწავლოთ სხვა მიმართულებები: დიზაინი, game dev, backend, ამერიკის შესაძლებლობები",
  },
  {
    id: "y",
    name: "Middle",
    price: 310,
    schedule: "2 lessons per week",
    plan: "Python --> HTML --> CSS --> JS --> React JSX (~80 lessons, total 3 years)",
    planGE: "Python --> HTML --> CSS --> JS --> React JSX (~80 გაკვეთილი, ჯამში 3 წელი)",
    future: "Afterward, you can learn other fields: design, game dev, backend, USA opportunities",
    futureGE: "შემდგომ შეგიძლიათ ისწავლოთ სხვა მიმართულებები: დიზაინი, game dev, backend, ამერიკის შესაძლებლობები",
  },
  {
    id: "z",
    name: "Hard",
    price: 390,
    schedule: "3 lessons per week",
    plan: "Python --> HTML --> CSS --> JS --> React JSX (~80 lessons, total 1.5 years)",
    planGE: "Python --> HTML --> CSS --> JS --> React JSX (~80 გაკვეთილი, ჯამში 1.5 წელი)",
    future: "Afterward, you can learn other fields: design, game dev, backend, USA opportunities",
    futureGE: "შემდგომ შეგიძლიათ ისწავლოთ სხვა მიმართულებები: დიზაინი, game dev, backend, ამერიკის შესაძლებლობები",
  },
  {
    id: "m",
    name: "MMA",
    price: "200",
    schedule: "please call on number +995 598 59 89 17",
    scheduleGE: "დაგვირეკეთ ნომერზე +995 598 59 89 17",
    future: "Afterward, you can learn other sports that will open GOA in future",
    futureGE: "შემდგომ შეგიძლიათ ისწავლოთ სხვა სპორტები, რომლებიც მომავალში გაიხსნება GOA-ში",
  },
];

export default function Courses() {
  return (
    <div className="courses-grid">
      <h1>Courses / კურსები</h1><br />
      {coursesData.map((course) => (
        <div key={course.id} className="course-card">
          <h2>{course.name}</h2>
          <p className="price">{course.price} Lari</p>
          <p className="schedule">{course.schedule} / {course.scheduleGE || course.schedule}</p>
          <p className="plan">{course.plan} / {course.planGE || course.plan}</p>
          <p className="future">{course.future} / {course.futureGE || course.future}</p>
        </div>
      ))}
    </div>
  );
}
