import { useForm } from "react-hook-form";
import axios from "axios";
import './register.scss'

function Register() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:5000/register", data);
      alert(response.data.message);
      reset();
    } catch (error) {
      alert("Գրանցումը ձախողվեց");
    }
  };

  return (
    <div>
      <h2>Գրանցում</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username", { required: true })} placeholder="Անուն" />
        <input {...register("password", { required: true })} type="password" placeholder="Գաղտնաբառ" />
        <button type="submit">Գրանցվել</button>
      </form>
    </div>
  );
}

export default Register;
