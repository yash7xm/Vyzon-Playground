const GettingStartedContent = () => {
    return (
        <div className="p-6 rounded-lg shadow-lg">
            {/* Installation Heading */}
            <div className="text-4xl font-bold text-brightBlue font-montserrat mb-6 underline underline-offset-4 decoration-wavy">
                Installation
            </div>

            {/* Installation Instructions */}
            <div className="text-lg text-darkGray font-roboto leading-8 mb-6">
                To install Vyzon, you can use npm:
                <pre className="bg-gray-100 p-4 rounded-md mt-2 mb-6 font-mono text-sm text-black">
                    $ npm i vyzon
                </pre>
                Follow these steps to set it up locally:
                <ol className="list-decimal pl-6 text-darkGray font-roboto leading-8 mt-4">
                    <li className="mb-4">
                        Clone the repository to your local machine using Git:
                        <pre className="bg-gray-100 p-4 rounded-md mt-2 font-mono text-sm text-black">
                            git clone https://github.com/yash7xm/Vyzon.git
                        </pre>
                    </li>
                    <li className="mb-4">
                        Change your current directory to the cloned repository:
                        <pre className="bg-gray-100 p-4 rounded-md mt-2 font-mono text-sm text-black">
                            cd Vyzon
                        </pre>
                    </li>
                    <li className="mb-4">
                        Make the Vyzon script executable:
                        <pre className="bg-gray-100 p-4 rounded-md mt-2 font-mono text-sm text-black">
                            chmod +x bin/vyzon
                        </pre>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default GettingStartedContent;
