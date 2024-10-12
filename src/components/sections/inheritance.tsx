import Code from "../utils/code";
import { Separator } from "../ui/separator";

const InheritanceContent = () => {
    return (
        <div className="p-6">
            {/* Inheritance Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Inheritance: Extending Classes in Vyzon
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                Vyzon supports class inheritance, enabling you to create new
                classes based on existing ones. This allows the new class to
                inherit properties and methods from the parent class, promoting
                code reusability and reducing redundancy. Inheritance forms the
                basis of polymorphism in Object-Oriented Programming (OOP),
                allowing you to create more specialized classes. Let’s explore
                how to use inheritance in Vyzon.
            </div>
            <Separator className="mb-6" />

            {/* Defining a Base Class Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Defining a Base Class
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To create a base class, use the <Code code="class" /> keyword.
                Here’s an example of a base class <Code code="Animal" /> that
                includes a constructor and a method:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    class Animal &#123;{"\n"}
                    {"  "}def constructor(name) &#123;{"\n"}
                    {"    "}this.name = name;{"\n"}
                    {"  "}&#125;
                    {"\n\n"}
                    {"  "}def speak() &#123;{"\n"}
                    {"    "}write(this.name + " makes a sound.");{"\n"}
                    {"  "}&#125;
                    {"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the <Code code="Animal" /> class has a
                    constructor that initializes the <Code code="name" />{" "}
                    property and a <Code code="speak" /> method that outputs a
                    generic sound message.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Extending a Class Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Extending a Class
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can extend a class using the <Code code="extends" />{" "}
                keyword. Here’s an example of a <Code code="Dog" /> class that
                inherits from the <Code code="Animal" /> class:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    class Dog extends Animal &#123;{"\n"}
                    {"  "}def constructor(name) &#123;{"\n"}
                    {"    "}super(name);{"\n"}
                    {"  "}&#125;
                    {"\n\n"}
                    {"  "}def speak() &#123;{"\n"}
                    {"    "}write(this.name + " barks.");{"\n"}
                    {"  "}&#125;
                    {"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the <Code code="Dog" /> class extends the{" "}
                    <Code code="Animal" /> class. The constructor uses the{" "}
                    <Code code="super" /> keyword to call the constructor of the
                    parent class, initializing the inherited{" "}
                    <Code code="name" /> property. The <Code code="speak" />{" "}
                    method is overridden to provide a specific sound for the
                    dog.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Creating an Object Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Creating an Object
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can create an object of the <Code code="Dog" /> class and
                call its <Code code="speak" /> method. Here’s how to do it:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let dog = new Dog("Buddy");{"\n"}
                    dog.speak(); // Outputs: Buddy barks.
                </pre>
                <p className="mt-4">
                    In this example, we create an instance of the{" "}
                    <Code code="Dog" /> class named <Code code="dog" /> and
                    initialize it with the name "Buddy". Calling the{" "}
                    <Code code="speak" /> method outputs: "Buddy barks."
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Using the Super Keyword Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Using the Super Keyword
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                The <Code code="super" /> keyword is used to call the
                constructor of the parent class and to access methods from a
                parent class within a child class. Here’s an example:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    class Parent &#123;{"\n"}
                    {"  "}def constructor() &#123;{"\n"}
                    {"    "}write("Parent constructor");{"\n"}
                    {"  "}&#125;
                    {"\n"}
                    &#125;{"\n\n"}
                    class Child extends Parent &#123;{"\n"}
                    {"  "}def constructor() &#123;{"\n"}
                    {"    "}super();{"\n"}
                    {"    "}write("Child constructor");{"\n"}
                    {"  "}&#125;
                    {"\n"}
                    &#125;
                </pre>
                <p className="mt-4">
                    In this example, the <Code code="Child" /> class extends the{" "}
                    <Code code="Parent" /> class. The constructor of the{" "}
                    <Code code="Child" /> class calls the constructor of the{" "}
                    <Code code="Parent" /> class using <Code code="super" /> and
                    then outputs a message indicating that the child constructor
                    has been called.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Creating a Child Object Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 ">
                Creating a Child Object
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can create an object of the <Code code="Child" /> class,
                which will automatically invoke the parent class's constructor:
                <pre className="bg-gray-100 p-4 rounded-md text-darkGray font-mono text-sm mt-2">
                    let child = new Child(); // Outputs: Parent constructor //
                    Outputs: Child constructor
                </pre>
                <p className="mt-4">
                    In this example, creating an instance of the{" "}
                    <Code code="Child" /> class triggers both the parent and
                    child constructors, resulting in the following output:
                    <br />
                    <Code code="Parent constructor" /> <br />
                    <Code code="Child constructor" />
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6 ">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                Inheritance in Vyzon allows developers to create new classes
                that inherit properties and methods from existing classes,
                promoting code reusability and flexibility. By utilizing the{" "}
                <Code code="extends" /> keyword, you can define child classes
                that extend the functionality of parent classes. The{" "}
                <Code code="super" /> keyword facilitates access to the parent
                class's constructor and methods, ensuring a seamless inheritance
                chain. This OOP approach not only enhances code organization but
                also fosters the implementation of polymorphism and other
                advanced programming concepts.
            </div>
        </div>
    );
};

export default InheritanceContent;
