type PlayerProps = {
  fname?: string;
  lname?: string;
  isIn: boolean;
  position: "left_winger" | "striker" | "right_winger";
};

// interface PlayerProps {
// fname?: string;
// lname?: string;
// isIn: boolean;
// position: "left_winger" | "striker" | "right_winger";
// }

export const Player = (props: PlayerProps) => {
  return (
    <div>
      {props.isIn ? (
        <h2>
          Welcome {props.fname} {props.lname}! You are playing todays match. You
          position is {props.position}.
        </h2>
      ) : (
        <h2>
          Welcome {props.fname} {props.lname}! You are not playing todays match.
        </h2>
      )}
    </div>
  );
};
