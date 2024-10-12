import Code from "../utils/code";
import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const ClassesAndObjectsContent = () => {
    return (
        <div className="p-6">
            {/* Classes and Objects Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Classes and Objects: Embracing Object-Oriented Programming in
                Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon supports Object-Oriented Programming (OOP), enabling you
                to model real-world entities using classes and objects. OOP
                allows for better organization of code, promoting reuse and
                modularity. In Vyzon, classes serve as blueprints for creating
                objects, encapsulating data and behavior together. Let’s explore
                how to define a class, create objects, and utilize their methods
                and properties.
            </div>
            <Separator className="mb-6" />

            {/* Defining a Class Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Defining a Class
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can define a class using the <Code code="class" /> keyword,
                followed by the class name. Inside the class, you can define
                methods (functions) and a constructor using the{" "}
                <Code code="def" /> keyword. Here’s an example of a class that
                represents a person:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`class Person {
    def constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    def greet() {
        write("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
}`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the class <Code code="Person" /> has a
                    constructor that initializes the <Code code="name" /> and{" "}
                    <Code code="age" /> properties. It also includes a method
                    called <Code code="greet" />, which outputs a greeting
                    message that incorporates the person's name and age.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Creating an Object Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Creating an Object
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can create an object from a class using the{" "}
                <Code code="new" /> keyword. Once an object is created, you can
                access its methods and properties. Here’s how to create an
                object of the <Code code="Person" /> class and call its{" "}
                <Code code="greet" /> method:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let person1 = new Person("Yash", 22);
person1.greet(); // Outputs: Hello, my name is Yash and I am 22 years old.`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, we create an instance of the{" "}
                    <Code code="Person" /> class named <Code code="person1" />{" "}
                    and initialize it with the name "Yash" and age 22. We then
                    call the <Code code="greet" /> method on{" "}
                    <Code code="person1" />, which outputs a personalized
                    greeting to the console.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Accessing Properties Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Accessing Properties
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can also access and modify the properties of an object
                directly using the dot notation. For example, you can update the{" "}
                <Code code="age" /> property of <Code code="person1" /> and call
                the <Code code="greet" /> method again:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`person1.age = 23;
person1.greet(); // Outputs: Hello, my name is Yash and I am 23 years old.`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, we update the <Code code="age" /> property
                    of <Code code="person1" /> to 23, and then we call the{" "}
                    <Code code="greet" /> method again. The output reflects the
                    updated age: "Hello, my name is Yash and I am 23 years
                    old.".
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Inheritance Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Inheritance: Extending Classes
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon supports inheritance, allowing you to create a new class
                based on an existing class. This enables you to extend the
                functionality of the parent class while adding additional
                properties or methods in the child class. Here’s an example of
                inheritance:
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`class Student extends Person {
    def constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    def study() {
        write(this.name + " is studying " + this.major + ".");
    }
}`}
                </SyntaxHighlighter>
                <p className="mt-4">
                    In this example, the <Code code="Student" /> class extends
                    the <Code code="Person" /> class. The constructor of the{" "}
                    <Code code="Student" /> class uses the <Code code="super" />{" "}
                    keyword to call the constructor of the parent class,
                    initializing the inherited properties. It also adds a new
                    property <Code code="major" /> and a method{" "}
                    <Code code="study" /> that outputs the student's major.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Practical Use Cases Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Practical Use Cases
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Using classes and objects in Vyzon allows for better code
                organization and reusability. Here are some practical use cases:
                <ul className="list-disc my-4">
                    <li>
                        <strong>Modeling Real-World Entities</strong>: Classes
                        provide a way to represent real-world objects,
                        encapsulating their properties and behaviors.
                    </li>
                    <li>
                        <strong>Code Reusability</strong>: By defining methods
                        within classes, you can reuse code across different
                        instances of a class without duplicating logic.
                    </li>
                    <li>
                        <strong>Encapsulation</strong>: OOP promotes
                        encapsulation, where data (properties) and functions
                        (methods) are bundled together, leading to a clear
                        separation of concerns.
                    </li>
                    <li>
                        <strong>Inheritance and Polymorphism</strong>: OOP
                        supports inheritance and polymorphism, allowing for
                        flexible code that can adapt to new requirements without
                        significant changes.
                    </li>
                </ul>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Vyzon's support for Object-Oriented Programming with classes and
                objects enables developers to write cleaner, more maintainable
                code. By encapsulating data and behavior within classes, and
                creating objects to represent real-world entities, you can take
                advantage of OOP principles like inheritance, encapsulation, and
                polymorphism. This leads to code that is more organized,
                reusable, and easier to understand.
            </div>
        </div>
    );
};

export default ClassesAndObjectsContent;
