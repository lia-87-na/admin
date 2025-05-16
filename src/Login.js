import { useForm } from "react-hook-form";
import axios from "axios";
import './login.scss'

function Login() {
  const { register, handleSubmit, reset } = useForm();

  

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/login", data);
      localStorage.setItem("token", response.data.token);
      alert("Մուտք գործումը հաջողվեց");
      reset();
    } catch (error) {
      alert("Սխալ մուտքանուն կամ գաղտնաբառ");
    }
  };

  return (
    <div>
      <h2>Մուտք</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} placeholder="Անուն" />
        <input {...register("password", { required: true })} type="password" placeholder="Գաղտնաբառ" />
        <button type="submit">Մուտք</button>
      </form>



    </div>
  );
}

export default Login;
