import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { Employee } from "../model/employee.model";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  private employees: Employee[] = [
    {
      id: 1,
      name: "Bill Gates",
      gender: "Male",
      email: "bill@ms.com",
      phone: 1234567890,
      department: "Managment",
      image: "assets/images/people/Gates.png",
      birthDate: "1955-10-28",
      startDate: "1975-04-04",
      salary: "$1,500,000 yearly",
      homeOffice: "Yes",
      education: "Harvard University",
      jobTitle: "Advisor",
      description: "Bill Gates is the co-founder of Microsoft, the world's largest PC software company. He is known for his philanthropic efforts through the Bill & Melinda Gates Foundation."
    },
    {
      id: 2,
      name: "Mary Kay Ash",
      gender: "Female",
      email: "mary@mk.com",
      phone: 1234567890,
      department: "Sales",
      image: "assets/images/people/Ash.png",
      birthDate: "1918-05-12",
      startDate: "1963-09-13",
      salary: "$500,000 yearly",
      homeOffice: "No",
      education: "Direct Selling Education Foundation",
      jobTitle: "Chairman",
      description: "Mary Kay Ash founded Mary Kay Cosmetics, a company that has empowered millions of women worldwide. She's recognized for her innovative business strategies and empowering leadership style."
    },
    {
      id: 3,
      name: "Dave Ulrich",
      gender: "Male",
      email: "dave@hr.com",
      phone: 1234567891,
      department: "HR",
      image: "assets/images/people/Ulrich.png",
      birthDate: "1953-03-03",
      startDate: "1980-06-15",
      salary: "$150,000 yearly",
      homeOffice: "Yes",
      education: "Ph.D. in Business and Organizational Behavior, UCLA",
      jobTitle: "HR Advisor",
      description: "Dave Ulrich is a renowned figure in the HR world, known for his research and publications. He has significantly influenced HR practices and leadership globally."
    },
    {
      id: 4,
      name: "Warren Buffet",
      gender: "Male",
      email: "warren@brk.com",
      phone: 1234567892,
      department: "Finance",
      image: "assets/images/people/Buffet.png",
      birthDate: "1930-08-30",
      startDate: "1965-05-10",
      salary: "$100,000 yearly",
      homeOffice: "No",
      education: "Master of Science in Economics, Columbia Business School",
      jobTitle: "Director",
      description: "Warren Buffet, the 'Oracle of Omaha', is one of the most successful investors of all time. He's the chairman and largest shareholder of Berkshire Hathaway."
    },
    {
      id: 5,
      name: "Philip Kotler",
      gender: "Male",
      email: "philip@marketing.com",
      phone: 1234567893,
      department: "Marketing",
      image: "assets/images/people/Kotler.png",
      birthDate: "1931-05-27",
      startDate: "1962-09-01",
      salary: "$200,000 yearly",
      homeOffice: "Yes",
      education: "Ph.D. in Economics, MIT Sloan School of Management",
      jobTitle: "Marketing Advisor",
      description: "Philip Kotler is often referred to as the 'Father of Modern Marketing'. His books and teachings have shaped modern marketing education and practices."
    },
    {
      id: 6,
      name: "Indra Nooyi",
      gender: "Female",
      email: "indra@pepsi.com",
      phone: 1234567894,
      department: "Sales",
      image: "assets/images/people/Nooyi.png",
      birthDate: "1955-10-28",
      startDate: "2006-10-01",
      salary: "$1,700,000 yearly",
      homeOffice: "No",
      education:
        "Master's in Public and Private Management",
      jobTitle: "Advisor",
      description: "Indra Nooyi is the former CEO of PepsiCo and has consistently ranked among the world's 100 most powerful women. She's known for her visionary leadership and strategic acumen."
    },
    {
      id: 7,
      name: "Sheryl Sandberg",
      gender: "Female",
      email: "sheryl@fb.com",
      phone: 1234567895,
      department: "Managment",
      image: "assets/images/people/Sandberg.png",
      birthDate: "1969-08-28",
      startDate: "2008-03-24",
      salary: "$800,000 yearly",
      homeOffice: "Yes",
      education: "MBA, Harvard Business School",
      jobTitle: "Engineer",
      description: "Sheryl Sandberg is the COO of Facebook and founder of LeanIn.Org. She's an advocate for women in leadership and has authored several influential books."
    },
    
    {
      id: 8,
      name: "Ruth Porat",
      gender: "Female",
      email: "ruth@google.com",
      phone: 1234567896,
      department: "Finance",
      image: "assets/images/people/Porat.png",
      birthDate: "1957-01-02",
      startDate: "2015-05-26",
      salary: "$650,000 yearly",
      homeOffice: "No",
      education: "MBA, Wharton School of the University of Pennsylvania",
      jobTitle: "Finance Advisor",
      description: "Ruth Porat is the CFO of Alphabet Inc. (Google's parent company). She's recognized for her expertise in finance and her leadership in the tech industry."
    },
    {
      id: 9,
      name: "Angela Ahrendts",
      gender: "Female",
      email: "angela@apple.com",
      phone: 1234567897,
      department: "Marketing",
      image: "assets/images/people/Ahrendts.png",
      birthDate: "1960-06-12",
      startDate: "2014-05-01",
      salary: "$1,200,000 yearly",
      homeOffice: "No",
      education: "Merchandising and Marketing, Ball State University",
      jobTitle: "Marketing Advisor",
      description: "Angela Ahrendts is the former Senior Vice President of Apple Inc. She's known for her leadership at Burberry and her role in Apple's retail strategy."
    },
    {
      id: 10,
      name: "Anne Mulcahy",
      gender: "Female",
      email: "anne@xerox.com",
      phone: 1234567898,
      department: "Sales",
      image: "assets/images/people/Mulcahy.png",
      birthDate: "1952-10-21",
      startDate: "1976-09-12",
      salary: "$1,100,000 yearly",
      homeOffice: "No",
      education: "BA in English and Journalism, Marymount College",
      jobTitle: "Manager",
      description: "Anne Mulcahy is the former CEO and Chairwoman of Xerox Corporation. She's credited with turning Xerox around during a critical period."
    },
    {
      id: 11,
      name: "Steve Jobs",
      gender: "Male",
      email: "steve@apple.com",
      phone: 1234567894,
      department: "Managment",
      image: "assets/images/people/Jobs.png",
      birthDate: "1955-02-24",
      startDate: "1976-04-01",
      salary: "$1, 500 yearly",
      homeOffice: "No",
      education: "Reed College",
      jobTitle: "Director",
      description: "Steve Jobs was the co-founder of Apple Inc. His vision and innovation have revolutionized multiple industries from computers and animated movies to music, phones, and tablet computing."
    },
    {
      id: 12,
      name: "Elon Musk",
      gender: "Male",
      email: "elon@tesla.com",
      phone: 1234567895,
      department: "HR",
      image: "assets/images/people/Musk.png",
      birthDate: "1971-06-28",
      startDate: "2004-02-01",
      salary: "$1, 500 yearly",
      homeOffice: "Yes",
      education: "University of Pretoria, Queen's University, University of Pennsylvania",
      jobTitle: "Advisor",
      description: "Elon Musk is the CEO of Tesla and SpaceX. He's a visionary entrepreneur known for his ambitious goals of sustainable energy and interplanetary colonization."
    },
    {
      id: 13,
      name: "Mark Zuckerberg",
      gender: "Male",
      email: "mark@fb.com",
      phone: 1234567896,
      department: "IT",
      image: "assets/images/people/Zuckerberg.png",
      birthDate: "1984-05-14",
      startDate: "2004-02-04",
      salary: "$1,000 yearly",
      homeOffice: "Yes",
      education: "Harvard University",
      jobTitle: "Advisor",
      description: "Mark Zuckerberg is the co-founder and CEO of Facebook. He has played a pivotal role in shaping the social media landscape."
    },
    {
      id: 14,
      name: "Sundar Pichai",
      gender: "Male",
      email: "sundar@google.com",
      phone: 1234567897,
      department: "IT",
      image: "assets/images/people/Pichai.png",
      birthDate: "1972-07-12",
      startDate: "2004-04-01",
      salary: "$2,000,000 yearly",
      homeOffice: "Yes",
      education: "Indian Institute of Technology Kharagpur, Stanford University, Wharton School of the University of Pennsylvania",
      jobTitle: "Advisor",
      description: "Sundar Pichai is the CEO of Google and its parent company, Alphabet Inc. He's known for his calm demeanor and leadership in the tech industry."

    },
    {
      id: 15,
      name: "Satya Nadella",
      gender: "Male",
      email: "satya@ms.com",
      phone: 1234567898,
      department: "IT",
      image: "assets/images/people/Nadella.png",
      birthDate: "1969-08-19",
      startDate: "1992-08-01",
      salary: "$1,500,000 yearly",
      homeOffice: "Yes",
      education: "Manipal Institute of Technology, University of Wisconsin–Milwaukee",
      jobTitle: "Advisor",
      description: "Satya Nadella is the CEO of Microsoft. Under his leadership, Microsoft has seen a resurgence, focusing on cloud computing and innovation."
    }
  ];

  private employees$ = new BehaviorSubject<Employee[]>(this.employees);

  constructor() {
    this.employees$.next([...this.employees]);
    
  }

  public getEmployeeById(id: number): Observable<Employee | undefined> {
    const employee = this.employees.find((t) => t.id === id);
    return of(employee);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.employees$.asObservable();
  }

  public addEmployee(employee: Employee): Observable<Employee[]> {
    const maxId = this.employees.reduce(
      (max, current) => Math.max(max, current.id),
      0
    );
    employee.id = maxId + 1;

    if (employee.gender === "Female") {
      employee.image = "assets/images/female.png";
    } else if (employee.gender === "Male") {
      employee.image = "assets/images/male.png";
    }

    this.employees.push(employee);
    this.employees$.next([...this.employees]);
    return of([...this.employees]);
  }

  public deleteEmployeeById(id: number): Observable<Employee[]> {
    this.employees = this.employees.filter((employee) => employee.id !== id);
    this.employees$.next([...this.employees]);
    return of([...this.employees]);
  }

  public updateEmployee(employee: Employee): Observable<Employee[]> {
    const index = this.employees.findIndex((t) => t.id === employee.id);
    this.employees[index] = employee;
    this.employees$.next([...this.employees]);
    console.log("Service: Index:", index, "Employee:", employee)
    return of([...this.employees]);
  }
  
  groupByDepartment(employees: Employee[]): { [department: string]: Employee[] } {
    let groupedEmployees: { [department: string]: Employee[] } = {};
    employees.forEach((employee) => {
      if (!groupedEmployees[employee.department]) {
        groupedEmployees[employee.department] = [];
      }
      groupedEmployees[employee.department].push(employee);
    });
    return groupedEmployees;
  }

  getFilteredEmployeesArray(groupedEmployees: { [department: string]: Employee[] }, searchTerm: string): Employee[] {
    let result: Employee[] = [];
    for (let department of Object.keys(groupedEmployees)) {
      result = result.concat(groupedEmployees[department].filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      ));
    }
    return result;
  }
}


