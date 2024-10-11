const InstallationContent = () => {
    return (
        <div>
            <div className="text-lg font-bold mb-2">Installation</div>
            <div className="text-sm mb-4">
                To install Vyzon, you can use npm:
                <pre className="bg-gray-100 p-2">$ npm i vyzon</pre>
                Follow these steps to set it up locally:
                <ol className="list-decimal list-inside mb-4">
                    <li>
                        Clone the repository to your local machine using Git:
                    </li>
                    <pre className="bg-gray-100 p-2">
                        git clone https://github.com/yash7xm/Vyzon.git
                    </pre>
                    <li>
                        Change your current directory to the cloned repository:
                    </li>
                    <pre className="bg-gray-100 p-2">cd Vyzon</pre>
                    <li>Make the Vyzon script executable:</li>
                    <pre className="bg-gray-100 p-2">chmod +x bin/vyzon</pre>
                </ol>
            </div>
        </div>
    );
};

export default InstallationContent;
