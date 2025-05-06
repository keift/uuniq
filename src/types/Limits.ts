import Parts from "./Parts";

type Limits = {
  [K in keyof Parts]: number;
};

export default Limits;