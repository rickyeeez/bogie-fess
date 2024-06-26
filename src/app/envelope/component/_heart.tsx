import React from "react";

interface Data {
  _id: string;
  from: string;
  to: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

interface Props {
  handleClick: (data: Data) => void;
  data: Data;
}

const Heart = (props: Props) => {
  const handleClick = () => {
    props.handleClick(props.data);
  };

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="card drop-shadow-lg">
        <div className="heart">
          <div
            onClick={handleClick}
            className="break flex justify-center items-center text-lg cursor-pointer"
          >
            ❓
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heart;
