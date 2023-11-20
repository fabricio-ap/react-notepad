import { useEffect, useRef, useState } from 'react';

export function useComponentVisible<Type extends Element>(callback?: () => void) {
  const ref = useRef<Type>(null);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener('click', showContent);

    return () => {
      document.removeEventListener('click', showContent);
    };
  });

  const showContent = ({ target }: Event) => {
    if (ref.current && ref.current.contains(target as Type)) {
      return setShow(true);
    }

    setShow(false);
    callback && callback();
  };

  return { ref, show, setShow };
}
