import Code from "../utils/code";
import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

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
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`class Animal {
  def constructor(name) {
    this.name = name;
  }

  def speak() {
    write(this.name + " makes a sound.");
  }
}`}
                </SyntaxHighlighter>
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
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`class Dog extends Animal {
  def constructor(name) {
    super(name);
  }

  def speak() {
    write(this.name + " barks.");
  }
}`}
                </SyntaxHighlighter>
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
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let dog = new Dog("Buddy");
dog.speak(); // Outputs: Buddy barks.`}
                </SyntaxHighlighter>
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
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`class Parent {
  def constructor() {
    write("Parent constructor");
  }
}

class Child extends Parent {
  def constructor() {
    super();
    write("Child constructor");
  }
}`}
                </SyntaxHighlighter>
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
                <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    {`let child = new Child(); // Outputs: Parent constructor
// Outputs: Child constructor`}
                </SyntaxHighlighter>
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
