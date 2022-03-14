USE employee_management_db;

INSERT INTO department(name)
VALUES
    ("Sales"),
    ("R&D"),
    ("Accounting"),
    ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Accountant", 120000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Bruce", "Wayne", 1, NULL),
    ("Talia", "Al-Ghul", 2, 1),
    ("Edward", "Nigma", 3, NULL),
    ("Selina", "Kyle", 4, 3),
    ("barbara", "Gordon", 5, NULL),
    ("Jim", "Gordon", 6, NULL),
    ("Harvey", "Dent", 7, 6);