import Card from "../cards/Card";
import Input from "../inputs/Input";
import Button from "../buttons/Button";
import ButtonLogin from "../buttons/ButtonLogin";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen itim-regular">
      <div className="">
        <Card>
          <div
            className="flex justify-center items-center gap-[1rem] mb-[1rem]"
            id="header-login"
          >
            <div className="maestro w-[4rem] h-[4rem]"></div>
            <h1 className="text-white text-xl">¡INICIA SESIÓN!</h1>
          </div>

          <div id="inputs-login">
            <div className="mb-[1rem]">
              <Input
                type="text"
                placeholder="USUARIO"
                icon="bi bi-person-circle"
              />
            </div>

            <div className="mb-[1rem]">
              <Input
                type="password"
                placeholder="CONTRASEÑA"
                icon="bi bi-eye-fill"
              />
            </div>

            <div>
              <h2 className="text-center mb-2 text-xl text-[#15072F] cursor-pointer transition-all duration-100 underline hover:scale-110">
                crear usuario
              </h2>
            </div>

            <div>
              <ButtonLogin />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
