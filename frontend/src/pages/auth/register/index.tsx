import WelcomeContent from "../common/welcome-content"

function RegisterPage() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <WelcomeContent />
            <div>
                Form Content
            </div>
        </div>
    );

}

export default RegisterPage;