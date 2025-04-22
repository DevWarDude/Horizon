import { useState } from "react";

function Test() {
  const [num, setNum] = useState(0);

  console.log(num);

  return (
    <div className="p-4 bg-slate-200 rounded-lg">
      If input is $1 interest will be 0.1
      <input
        className="input"
        type="number"
        name=""
        id=""
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      {+num > 1 && <div>{(10 / 100) * +num + +num}</div>}
    </div>
  );
}

export default Test;
