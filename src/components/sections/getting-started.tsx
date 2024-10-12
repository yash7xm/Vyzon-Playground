import Code from "../utils/code";
import { Separator } from "../ui/separator";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

const InstallationAndUsageContent = () => {
    return (
        <div className="p-6">
            {/* Installation Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6">
                Installation
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To use Vyzon locally, you can install it in two different ways:
            </div>
            <Separator className="mb-6" />

            {/* Installation using npm */}
            <div className="text-2xl font-bold text-darkGray font-roboto mb-4">
                Install Vyzon Using npm
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                You can install Vyzon directly from npm by running the following
                command in your terminal:
                <SyntaxHighlighter
                    language="bash"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    $ npm i vyzon
                </SyntaxHighlighter>
            </div>
            <Separator className="mb-6" />

            {/* Installation using Git */}
            <div className="text-2xl font-bold text-darkGray font-roboto mb-4">
                Install Vyzon Locally Using Git
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To install Vyzon locally, follow these steps:
            </div>
            <ol className="list-decimal list-inside mb-6">
                <li>
                    Clone the repository to your local machine using Git:
                    <SyntaxHighlighter
                        language="bash"
                        style={oneLight}
                        className="mt-2 shadow-lg rounded-lg"
                    >
                        $ git clone https://github.com/yash7xm/Vyzon.git
                    </SyntaxHighlighter>
                </li>
                <li>
                    Change your current directory to the cloned repository:
                    <SyntaxHighlighter
                        language="bash"
                        style={oneLight}
                        className="mt-2 shadow-lg rounded-lg"
                    >
                        $ cd Vyzon
                    </SyntaxHighlighter>
                </li>
                <li>
                    Make the Vyzon script executable by running the following
                    command:
                    <SyntaxHighlighter
                        language="bash"
                        style={oneLight}
                        className="mt-2 shadow-lg rounded-lg"
                    >
                        $ chmod +x bin/vyzon
                    </SyntaxHighlighter>
                </li>
            </ol>
            <Separator className="mb-6" />

            {/* Usage Section */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6">
                Usage
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                After installation, you can run Vyzon scripts in two main ways:
            </div>
            <Separator className="mb-6" />

            {/* Running a Vyzon Script from a File */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                <h3 className="font-bold">
                    Running a Vyzon Script from a File
                </h3>
                <p>To run a Vyzon script from a file, follow these steps:</p>
                <ol className="list-decimal list-inside mb-6">
                    <li>
                        Create a new Vyzon file with your code in the main
                        directory. Name the file with a <Code code=".vy" />{" "}
                        extension. For example: <Code code="yourfile.vy" />.
                    </li>
                    <li>
                        To run your Vyzon script, execute the following command
                        in your terminal:
                        <SyntaxHighlighter
                            language="bash"
                            style={oneLight}
                            className="mt-2 shadow-lg rounded-lg"
                        >
                            $ bin/vyzon -f yourfile.vy
                        </SyntaxHighlighter>
                        <p className="text-sm mt-2">
                            This command will parse and interpret the contents
                            of <Code code="yourfile.vy" />.
                        </p>
                    </li>
                </ol>
            </div>
            <Separator className="mb-6" />

            {/* Running an Expression Directly */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                <h3 className="font-bold">Running an Expression Directly</h3>
                <p>
                    You can also run an expression directly from the command
                    line by using the <Code code="-e" /> flag:
                </p>
                <SyntaxHighlighter
                    language="bash"
                    style={oneLight}
                    className="mt-2 shadow-lg rounded-lg"
                >
                    $ bin/vyzon -e "write(2 + 2);"
                </SyntaxHighlighter>
                <p className="text-sm mt-2">
                    This command will parse and evaluate the expression{" "}
                    <Code code="2 + 2" />.
                </p>
            </div>
            <Separator className="mb-6" />

            {/* Summary Section */}
            <div className="text-4xl font-bold text-emeraldGreen font-montserrat mb-6">
                Summary
            </div>
            <div className="text-lg text-darkGray font-roboto leading-8">
                With Vyzon installed, you can easily run scripts and evaluate
                expressions directly from the command line. The straightforward
                setup and usage instructions make it easy to get started with
                your Vyzon projects.
            </div>
        </div>
    );
};

export default InstallationAndUsageContent;
