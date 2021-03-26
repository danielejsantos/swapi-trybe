interface UseFooter {
  getCurrentYear: () => number;
}

const useFooter = (): UseFooter => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return { getCurrentYear };
}

export default useFooter;