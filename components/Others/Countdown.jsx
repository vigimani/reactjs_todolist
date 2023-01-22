import React from "react";
import { useCountdown } from "@/hooks/useCountdown";
import DateTimeDisplay from "./DateTimeDisplay";
import { Flex, Text, Button } from "@chakra-ui/react";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice" style="text-align: center;
    padding: 2rem;
    border: 1px solid #ebebeb;
    border-radius: 0.25rem;
    margin: 0.5rem;">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <Flex>
    <div className="show-counter" style={{padding: "0.5rem"}}>
      <a
        href="https://polypus-crypto.com"
        target="_blank"
        rel="noopener noreferrer"
        className="countdown-link"
        style = {{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            fontWeight: "700",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            padding: "0.5rem",
            border: "1px solid #ebebeb",
            borderRadius: "0.25rem",
            textDecoration: "none",
            color: "#000"}}
      >
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p>:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </a>
    </div>
    </Flex>
  );
};

export default function Countdown({ targetDate }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <Flex>
        <ShowCounter
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      </Flex>
    );
  }
}
