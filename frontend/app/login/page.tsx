import Login from "../_components/login/Login";

export default function LoginPage() {
  const handleLogin = () => {
    console.log("Logged in");
  };

  const handleGoSignup = () => {
    window.location.href = "/"; // Эсвэл өөр зам руу шилжүүлэх
  };

  return <Login goLogin={handleLogin} goSignup={handleGoSignup} />;
}
