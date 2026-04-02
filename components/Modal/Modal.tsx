"use client";
import css from "./Modal.module.css";
import { useRouter } from "next/navigation";


interface ModalProps {
  onClose: () => void;
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
        <button className={css.backBtn} onClick={handleClick}>Cancel</button>
             {children}
          </div>
      </div>
     
  );
}