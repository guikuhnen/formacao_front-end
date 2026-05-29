import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Counter from "../components/Counter";
import Title from "../components/Title";
import { CountdownContext } from "../context/CountdownContext";
import useCountdown from "../hooks/useCountdown";
import "./Countdown.css";

const Countdown = () => {
  const { event } = useContext(CountdownContext);

  if (!event) return <Navigate to="/" />;

  const { title, date, color } = event;

  const [day, hour, minute, second] = useCountdown(date);

  return (
    <>
      <Title title={title} eventColor={color} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={color} />
        <Counter title="Horas" number={hour} eventColor={color} />
        <Counter title="Minutos" number={minute} eventColor={color} />
        <Counter title="Segundos" number={second} eventColor={color} />
      </div>
    </>
  );
};

export default Countdown;
