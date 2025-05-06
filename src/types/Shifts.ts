import Parts from "./Parts";

type Shifts = {
  [K in keyof Parts]: number;
};

export default Shifts;