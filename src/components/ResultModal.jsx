import { forwardRef, useRef, useImperativeHandle } from "react";
import {createPortal} from 'react-dom'

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime/(targetTime * 1000) ) * 100)

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal (
    <dialog ref={dialog} className="result-modal">
      <h1>{userLost && "You Lost"}</h1>
      {!userLost && <h1 className="color-black">YOUR SCORE : {score}</h1>}
      <p>
        the target time was <strong>{targetTime} secondes.</strong>
      </p>
      <p>
        {" "}
        you stopped the timer with{" "}
        <strong>{formattedRemainingTime} seconde left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog> , 
    document.getElementById('modal')
    
  );
});

export default ResultModal;
