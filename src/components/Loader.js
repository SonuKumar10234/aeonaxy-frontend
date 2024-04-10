import { SpinnerCircularFixed } from "spinners-react";

export const Loader = ({style=null}) => {
    return (
      <div className={`flex items-center justify-center  ${!style ? 'h-[calc(100vh_-_80px)]' : style}`}>
        <SpinnerCircularFixed
          size={
            !style ? 50 : 30
          }
          thickness={180}
          speed={136}
          color="#0d9488"
          secondaryColor={"rgba(0, 0, 0, 0.3)"}
        />
      </div>
    );
  };