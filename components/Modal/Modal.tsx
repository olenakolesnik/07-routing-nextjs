"use client";
import css from "./Modal.module.css";
import { useRouter } from "next/navigation";


interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  }
  
  return (
<div
          className={css.backdrop}
      >
      <div className={css.modal}>
        {children}
        <button onClick={handleClick}>Cancel</button>
          </div>
      </div>
     
  );
}